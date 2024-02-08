import { Router } from "express";
import ClientsController from "../../ccontroller/clients.controller.js";

const control = new ClientsController();
const router = Router();

//'http://localhost:PORT/api/clients/'
export default router
  .get('/',         control.gets)
  .get('/:eid',     () => {})
  .post('/',        () => {})
  .put('/:eid',     () => {})
  .delete('/:eid',  () => {})


