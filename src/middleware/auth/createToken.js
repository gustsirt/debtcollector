import configObject from "../../config/index.js";
import jwt from "jsonwebtoken";

const createToken = (user, expiration = "1d") => jwt.sign(user, configObject.jwt_code, { expiresIn: expiration });

export default createToken;