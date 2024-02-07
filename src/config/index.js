import dotenv from 'dotenv'
import program from './commander.js';

const opts = program.opts();

dotenv.config({
  path: opts.mode == 'production' ? './.env.production' : './.env.development'
})

const configObject = {
  //conexion Mongo Atlas a traves de mongoose
  port: process.env.PORT,
  jwt_code: process.env.JWT_SECRET_CODE,
  cookies_code: process.env.COOKIES_SECRET_CODE,
  mongo_uri: process.env.MONGO_URI,
  uadmins: process.env.USERS_ADMIN,
  uadmin_pass: process.env.USER_ADMIN_PASS,
  development: opts.mode == 'development'
}

export default configObject;