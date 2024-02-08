import { Router } from "express";
import ClientsController from "../../ccontroller/clients.controller.js";

const control = new ClientsController();
const router = Router();

//'http://localhost:PORT/api/clients/'
export default router
  .get('/',         control.gets)
  .get('/:eid',     control.get)
  .post('/',        control.create)
  .put('/:eid',     control.update)
  .delete('/:eid',  control.delete)


