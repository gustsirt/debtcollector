import CustomController from "./custom.controller.js";
import { paymentPlanService } from "../mrepository/service.js";

export default class PaymentPlanController extends CustomController {
  constructor() {
    super(paymentPlanService);
  }
}