import configObject from "../../config/index.js";
import jwt from "jsonwebtoken";

const createToken = (user) => jwt.sign(user, configObject.jwt_code, { expiresIn: "1d" });

export default createToken;