import { Router } from "express";
import ClientCRouter from "./api/clients.croute.js";
import ProductCRouter from "./api/products.croute.js";
import TransactionCRouter from "./api/transactions.croute.js";

const router = Router();
//const clientsRoute = new ClientCRouter()
export default router
  .use('/api/users/',       () => {})
  .use('/api/clients/',     (new ClientCRouter()).getRouter())
  .use('/api/products/',    (new ProductCRouter()).getRouter())
  .use('/api/transaction/', (new TransactionCRouter()).getRouter())
  .use('/api/payments/',    () => {})
  .use('/api/messages/',    ( ) => {})