import { Router } from "express";
import MailController from "../../controller/mail.controller.js";
import { handleAuth } from "../../middleware/handleAuth.js";

const router = Router();
const sControl = new MailController()

// http://localhost:PORT/api/mail/
router
  .post('/send',  handleAuth(['USER'], true), sControl.send)

export default router;