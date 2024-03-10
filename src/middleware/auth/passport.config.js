
import configObject from "../../config/index.js";
import passport from "passport";
import jwt from "passport-jwt";

const JWTStrategy = jwt.Strategy;
const ExtractJWT = jwt.ExtractJwt;


const initializePassport = () => {
  configObject
  passport.use("jwt", new JWTStrategy(
      {
        //jwtFromRequest: ExtractJWT.fromExtractors([cookieExtractor]),
        jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
        secretOrKey: configObject.jwt_code,
      },
      async (jwt_payload, done) => {
        try {
          return done(null, jwt_payload); // resultado token
        } catch (error) {
          logger.error(error);
          return done(error);
        }
      },
    ),
  );
};

export default initializePassport;