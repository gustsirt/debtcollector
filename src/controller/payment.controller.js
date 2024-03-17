import CustomController from "../libraries/customs/controller.js";
import { paymentService } from "../repository/service.js";

export default class PaymentController extends CustomController {
  constructor() {
    super(paymentService);
  }
}