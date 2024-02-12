import CustomController from "./custom.controller.js";
import { paymentService } from "../mrepository/service.js";

export default class PaymentController extends CustomController {
  constructor() {
    super(paymentService);
  }
}