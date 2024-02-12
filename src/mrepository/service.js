import CustomRepository from "./custom.repository.js";
import CustomRepositoryLU from "./customlu.repository.js";

import ClientDaoMongo from "../mdao/mongo/client.dao.mongo.js";
import ProductDaoMongo from "../mdao/mongo/product.dao.mongo.js";
import TransactionDaoMongo from "../mdao/mongo/transaction.dao.mongo.js";
import PaymentPlanDaoMongo from "../mdao/mongo/paymentplan.dao.mongo.js";
import PaymentDaoMongo from "../mdao/mongo/payment.dao.mongo.js";

export const clientsService       = new CustomRepositoryLU (new ClientDaoMongo())
export const productsService      = new CustomRepositoryLU (new ProductDaoMongo())
export const transactionsService  = new CustomRepositoryLU (new TransactionDaoMongo())
export const paymentPlanService   = new CustomRepository   (new PaymentPlanDaoMongo())
export const paymentService       = new CustomRepository   (new PaymentDaoMongo())