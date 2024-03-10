import { Router } from "express";
import SessionsController from "../../controller/sessions.controller.js";


//import { handleAuth } from "../../middleware/handlePoliciesPASP.js";

const router = Router();
const sControl = new SessionsController();

// http://localhost:PORT/api/session/
router
  .post('/register', sControl.register)
  .post('/login', sControl.login)
  .get ('/logout', sControl.logout)
  .get ('/user', /* handleAuth(['USER']) */ sControl.getUserSession)

export default router;
