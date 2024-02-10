//import { ClientsDao } from "../mdao/factory.js";
import CustomRepository from "./custom.repository.js";
import ClientsRepository from "./clients.repository.js";

import ClientDaoMongo from "../mdao/mongo/client.dao.mongo.js";
import ProductDaoMongo from "../mdao/mongo/product.dao.mongo.js";
import TransactionDaoMongo from "../mdao/mongo/transaction.dao.mongo.js";

export const clientsService = new ClientsRepository (new ClientDaoMongo())
export const productsService = new CustomRepository (new ProductDaoMongo())
export const transactionsService = new CustomRepository (new TransactionDaoMongo())