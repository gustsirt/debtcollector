import CustomRouter from "../../libraries/customs/route.class.js"
import TransactionsController from "../../controller/transactions.controller.js";

const traControl = new TransactionsController()
export default class TransactionCRouter extends CustomRouter {
  constructor() {
    super(traControl);
  }
}