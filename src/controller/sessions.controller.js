import configObject from "../config/index.js";


class SessionsController {
  constructor() {
    this.service = "";
  }
  requieredfield = {
    register: ['first_name', 'last_name', 'email', 'birthday', 'password'],
    login: ['email', 'password']
  }
  admins = configObject.uadmins || []
  admin_pass = configObject.uadmin_pass

  register = async (req, res) => {
    res.sendSuccess('ok')
    /*
    try {
      const userData = validateFields(req.body, this.requieredfield.register);
      userData.password = createHash(userData.password)
  
      const userFound = await userService.getBy({email: userData.email});
  
      if (userFound) throw new CustomError(`Ya existe un usuario con ese email. pruebe con otro`)
  
      await userService.create(userData)
  
      res.sendSuccess({}, "Registro exitoso. Ahora inicia sesión con el usuario registrado")
      // res.renderPage("login","Login", {answer: 'Se ha registrado satisfactoriamente' })
  
    } catch (error) {
      res.sendCatchError(error)
      // if (error instanceof CustomError) {
      //   res.renderPage("register","Nuevo Registro", {answer: error.message })
      // } else {
      //   res.renderPage("register","Nuevo Registro", {answer: 'Ocurrio un error, vuelva a intentarlo' })
      // }
    }
  */}

  login = async (req, res) => {/*
    const userData = validateFields(req.body, this.requieredfield.login);
  
    try {
      // if (this.admins.includes(userData.email) && isValidPassword(userData.password, {password: this.admin_pass}) ) {
  
      //   const token = createToken({id: 0, role: "Admin"})
      //   res.sendSuccess({token}, "Log In exitoso con: Usuario Administardor");
      //   //return res.sendTokenCookieSuccess(token, "Log In exitoso con Usuario Administrador")
      // }
  
      const userFound = await usersService.getBy({email: userData.email});
  
      if (!userFound || !isValidPassword(userData.password, userFound)) {
        throw new CustomError(`Email o contraseña equivocado`);
      }
      
      const token = createToken({id: userFound._id, role: userFound.role})

      //res.sendTokenCookieSuccess(token, {})
      res.sendSuccess({token}, "Log In exitoso con: " + userFound.first_name);
  
    } catch (error) {
      logger.error(error);
      res.sendCatchError(error)
    }
  */}

  logout = (req, res) => {/*
    //res.clearCookie('token').redirect('/');
*/}

  getUserSession = (req, res) => {/*
    res.sendSuccess(req.user)
*/}
}

export default SessionsController;