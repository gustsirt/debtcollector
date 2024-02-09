//import { ClientsDao } from "../mdao/factory.js";
import CustomRepository from "./custom.repository.js";
import ClientsRepository from "./clients.repository.js";

import ClientDaoMongo from "../mDao/mongo/client.dao.mongo.js";
import ProductDaoMongo from "../mDao/mongo/product.dao.mongo.js";
import TransactionDaoMongo from "../mDao/mongo/transaction.dao.mongo.js";

export const clientsService = new ClientsRepository (new ClientDaoMongo())
export const productsService = new CustomRepository (new ProductDaoMongo())
export const transactionsService = new CustomRepository (new TransactionDaoMongo())