import { Router } from "express";
import clientsRoute from "./api/clients.route.js";
import handleResponses from "../cmiddleware/handleResponses.js";

const router = Router();

export default router
  .use('/api/users/',   handleResponses, () => {})
  .use('/api/clients/', handleResponses, clientsRoute)
  .use('/api/products/',handleResponses, () => {})
  .use('/api/payments/',handleResponses, () => {})
  .use('/api/messages/',handleResponses, () => {})