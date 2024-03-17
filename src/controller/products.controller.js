import CustomController from "../libraries/customs/controller.js";
import { productsService } from "../repository/service.js";

export default class ProductsController extends CustomController {
  constructor() {
    super(productsService);
  }
}