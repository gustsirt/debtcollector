import configObject from "../config/index.js";
import CheckError from "../errors/CheckError.js";
import { UserError } from "../errors/customError.js";
import createToken from "../middleware/auth/createToken.js";
import { createHash, isValidPassword } from "../middleware/auth/passwords.js";
import { usersService } from "../repository/service.js";

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
      res.sendSuccess(newUser._id, "Successful registration")

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

  getUserSession = async (id) => {
    const user = await this.service.getBy({_id: id});

    return {
      id: id,
      name: user?.first_name,
      lname: user?.last_name,
      email: user?.email,
      role: user?.role,
      cart: user?.cart,
      ...this.handleAccess(user?.role)
    };
  } // auxiliar function for Handle Authorization

  // AUXILIARY
  handleAccess = role => {
    const access = {}
      if (role === 'user_premium') access.accessPremium = true;
    return access
  }
}

export default SessionsController;