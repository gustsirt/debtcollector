import productModel from "./model/product.model";

export default class ProductDaoMongo {
  constructor() {
    this.model = productModel;
  }
  get    = async (filter = {})        => await this.model.find(filter)
  getBy  = async (filter)             => await this.model.findOne(filter)
  create = async (newElement)         => await this.model.create(newElement)
  update = async (filter, elementUpdate) => await this.model.findOneAndUpdate(filter, elementUpdate) // elemento previo a actualizarce
  delete = async (filter)                => await this.model.findOneAndDelete(filter)
}
