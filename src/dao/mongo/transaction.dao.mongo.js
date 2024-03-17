import DaoMongo from "../../libraries/customs/dao.mongo.js";
import transactionModel from "../model/transaction.model.js";

export default class TransactionDaoMongo  extends DaoMongo{
  constructor() {
    super (transactionModel);
  }
}