import DaoMongo from "../../libraries/customs/dao.mongo.js";
import productModel from "../model/product.model.js";

export default class ProductDaoMongo  extends DaoMongo{
  constructor() {
    super (productModel);
  }
}