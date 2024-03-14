import { Router } from "express";
import SessionsController from "../../controller/user.sessions.controller.js";

import { handleAuth } from "../../middleware/handleAuth.js";

const router = Router();
const sControl = new SessionsController();

// http://localhost:PORT/api/session/
router
  .post('/register', sControl.register)
  .post('/login', sControl.login)
  .get ('/logout', sControl.logout)
  .get ('/user', handleAuth(["USER"]), sControl.getUserSession)
  .get ('/userrecovery', sControl.userRecovery)

export default router;
