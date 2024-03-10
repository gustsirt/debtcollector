import { Router } from "express";
import sessionsRoute from "./api/sessions.route.js"
import ClientCRouter from "./api/clients.croute.js";
import ProductCRouter from "./api/products.croute.js";
import TransactionCRouter from "./api/transactions.croute.js";
import pruebasRouter from "./api/xpruebas.route.js";
import errorHandler from "../middleware/handleError.js";

//import { handleAuth } from "../middleware/auth/handlePoliciesPASP.js";

const router = Router();
//const clientsRoute = new ClientCRouter()
export default router
  .use('/api/session/',     sessionsRoute)
  .use('/api/users/',       () => {})
  .use('/api/clients/',     (new ClientCRouter()).getRouter())
  .use('/api/products/',    (new ProductCRouter()).getRouter())
  .use('/api/transaction/', (new TransactionCRouter()).getRouter())
  .use('/api/payments/',    () => {})
  .use('/api/messages/',    ( ) => {})
  .use('/api/pruebas/',     pruebasRouter)
  .use('*', (req, res) => res.status(404).send('Not Found'))

  .use(errorHandler)