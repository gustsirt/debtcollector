import CustomController from "./custom.controller.js";
import { transactionsService } from "../mrepository/service.js";

export default class TransactionsController extends CustomController {
  constructor() {
    super(transactionsService);
  }
}