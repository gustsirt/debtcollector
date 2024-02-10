import { Router } from "express";
import ClientCRouter from "./api/clients.croute.js";

//import clientsRoute from "./api/clients.route.js";

const router = Router();
const clientsRoute = new ClientCRouter()
export default router
  .use('/api/users/',   () => {})
  .use('/api/clients/', clientsRoute.getRouter())
  .use('/api/products/',() => {})
  .use('/api/payments/',() => {})
  .use('/api/messages/',() => {})