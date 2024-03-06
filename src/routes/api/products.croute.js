import ProductsController from "../../ccontroller/products.controller.js";
import CustomRouter from "./custom.route.js"

const cControl = new ProductsController()
export default class ProductCRouter extends CustomRouter {
  constructor() {
    super(cControl);
  }
}