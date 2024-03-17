import CustomController from "../libraries/customs/controller.js";
import { paymentPlanService } from "../repository/service.js";

export default class PaymentPlanController extends CustomController {
  constructor() {
    super(paymentPlanService);
  }
}