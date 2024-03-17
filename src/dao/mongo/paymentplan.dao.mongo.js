import DaoMongo from "../../libraries/customs/dao.mongo.js";
import paymentplanModel from "../model/paymentplan.model.js";

export default class PaymentPlanDaoMongo  extends DaoMongo {
  constructor() {
    super (paymentplanModel);
  }
}