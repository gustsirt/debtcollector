import { Router } from "express";
//import passport from "passport";

import SessionsController from "../../controller/users.sessions.controller.js";
//import { handleAuth } from "../../middleware/handlePoliciesPASP.js";


const router = Router();
const sControl = new SessionsController();

// http://localhost:PORT/api/sessions/
router
  .post('/register', sControl.register)
  .post('/login', sControl.login)
  .get ('/logout', sControl.logout)
  //.get ('/user', handleAuth(['USER']), sControl.getUserSession)
  .get ('/user', sControl.getUserSession)

export default router;
