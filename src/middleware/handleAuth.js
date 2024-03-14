import passport from "passport";
import SessionsController from "../controller/user.sessions.controller.js";

const uControl = new SessionsController();

// ? AUTH JWT BEARER - PASSPORT

export const handleAuth = (policies, dataUser = false) => {
  // Policies => ['PUBLIC', 'USER', 'USER_PREMIUM', 'ADMIN']
  return async (req, res, next) => {
    try {
      passport.authenticate('jwt', {session: false}, async function (err, user, info) {
        if (err) next(err)

        if (user) {
          req.user = dataUser
            ? await uControl.getUser(user.id)
            : {id: user.id, role: user.role}
        }

        if(policies[0] === 'PUBLIC') return next();

        if (!user) return res.sendUserError('Invalid token')

        if(user.role.toUpperCase() === 'ADMIN') return next();
        if(!policies.includes(user.role.toUpperCase())) return res.sendUserError('User not authorized')
        next();
      })(req, res, next);      
    } catch (error) {
      next(error)
    }
  };
};