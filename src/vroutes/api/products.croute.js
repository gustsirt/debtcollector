import ProductsController from "../../ccontroller/products.controller.js";
import CustomRouter from "./custom.route.js"

const prdControl = new ProductsController();
export default class ProductCRouter extends CustomRouter {
  constructor() {
    super(prdControl);
  }
}