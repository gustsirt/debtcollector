import DaoMongo from "./custom.dao.mongo.js";
import paymentModel from "../model/payment.model.js";

export default class PaymentDaoMongo  extends DaoMongo {
  constructor() {
    super (paymentModel);
  }
}