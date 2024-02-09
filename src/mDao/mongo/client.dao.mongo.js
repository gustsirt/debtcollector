import clientModel from "./model/client.model.js";

export default class ClientDaoMongo {
  constructor() {
    this.model = clientModel;
  }
  get    = async (filter = {})        => await this.model.find(filter)
  getBy  = async (filter)             => await this.model.findOne(filter)
  create = async (newElement)         => await this.model.create(newElement)
  update = async (filter, elementUpdate) => await this.model.findOneAndUpdate(filter, elementUpdate, {new: true})
  delete = async (filter)                => await this.model.findOneAndDelete(filter, {new: true})
}


//const {default: nombre} = await ?