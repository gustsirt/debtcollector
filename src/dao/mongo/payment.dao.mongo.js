import DaoMongo from "../../libraries/customs/dao.mongo.js";
import paymentModel from "../model/payment.model.js";

export default class PaymentDaoMongo  extends DaoMongo {
  constructor() {
    super (paymentModel);
  }
}