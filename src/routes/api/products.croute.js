import CustomRouter from "../../libraries/customs/route.class.js"
import ProductsController from "../../controller/products.controller.js";

const cControl = new ProductsController()
export default class ProductCRouter extends CustomRouter {
  constructor() {
    super(cControl);
  }
}