import configObject from "../../config/index.js";
import sendEmailwithLayout from "../../libraries/emails/sendMail.js";
import CheckError from "../../libraries/errors/CheckError.js";
import { UserError } from "../../libraries/errors/customError.js";
import createToken from "../../middleware/auth/createToken.js";
import { createHash, isValidPassword } from "../../middleware/auth/passwords.js";
import { usersService } from "./service.js";

class SessionsController {
  constructor() {
    this.service = usersService;
  }
  requiredfields = {
    register: ['first_name', 'last_name', 'typecode', 'code', 'email', 'password'],
    login: ['email', 'password']
  }
  admins = configObject.uadmins || []
  admin_pass = configObject.uadmin_pass

  register = async (req, res, next) => {
    try {
      const userData = CheckError.validateFields(req.body, this.requiredfields.register);

      userData.password = createHash(userData.password)

      const exists = await this.service.exists({email: userData.email});
      if (exists || this.admins.includes(userData.email)) throw new UserError(`A user with that email already exists.`)
      
      const newUser = await this.service.create(userData)

      const user = newUser
      const subject   = 'Bienvenido a DebtCollector'
      
      await sendEmailwithLayout({user}, subject, "welcome")
      
      const token = createToken({id: newUser._id, role: newUser.role})
      res.sendSuccess({token}, "Successful registration")

    } catch (error) {
      next(error)
    }
  }

  login = async (req, res, next) => {
    try {
      const userData = CheckError.validateFields(req.body, this.requiredfields.login);

      // Admin Verification
      if (this.admins.includes(userData.email)) {
        if (isValidPassword(userData.password, {password: this.admin_pass})) {
          const token = createToken({id: 0, role: "admin"})
          return res.sendSuccess({token}, "Successful login with: Administrator User")
        } else {
          throw new UserError(`Wrong email or password`);
        }
      }
      // User Verification
      const userFound = await this.service.getBy({email: userData.email});
      if (!userFound || !isValidPassword(userData.password, userFound)) {
        throw new UserError(`Wrong email or password`);
      } 

      const token = createToken({id: userFound._id, role: userFound.role})
      res.sendSuccess({token}, userFound.first_name+" made a successful LogIn");

    } catch (error) {
      next(error)
    }
  }

  logout = (req, res) => {/*
    //res.clearCookie('token').redirect('/');
*/}

  userRecovery = async (req, res, next) => {
    try {      
      const { email } = req.body
      const userFound = await this.service.getBy({email});
      const token = createToken({id: userFound._id, role: userFound.role}, '1h')

      // enviar mail de recuperación
      const user = { name: userFound.first_name, email: userFound.email}
      const subject   = 'Recuperar Contraseña'
      const options = {
        user,
        url: `${configObject.cors_origin}/#/recoverypassword`,
        token
      }
      const resp = await sendEmailwithLayout(options, subject, "recoveryUser")
      
      res.sendSuccess(resp)
    } catch (error) {
      next(error);
    }
  }
  userRecoveryPassword = async (req, res, next) => {
    try {
      let { password } = req.body
      password = createHash(password)
      await this.service.update({_id: req.user.id}, {password})
      
      res.sendSuccess("User updated")
    } catch (error) {
      next(error);
    }
  }

  getUserSession = async (req, res, next) => {
    try {
      res.sendSuccess(await this.getUser(req.user.id))
    } catch (error) {
      next(error)
    }
  }

  // AUXILIARY
  getUser = async (id) => {
    const user = await this.service.getBy({_id: id});

    return {
      id: id,
      name: user?.first_name,
      lname: user?.last_name,
      email: user?.email,
      role: user?.role,
      ...this.handleAccess(user?.role)
    };
  }

  handleAccess = role => {
    const access = {}
      if (role === 'user_premium') access.accessPremium = true;
    return access
  }
}

export default SessionsController;