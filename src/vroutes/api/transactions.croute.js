import CustomRouter from "./custom.route.js"
import TransactionsController from "../../ccontroller/transactions.controller.js";

const traControl = new TransactionsController()
export default class TransactionCRouter extends CustomRouter {
  constructor() {
    super(traControl);
  }
}