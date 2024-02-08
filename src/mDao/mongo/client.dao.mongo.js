import clientModel from "./model/client.model.js";

export default class ClientDaoMongo {
  constructor() {
    this.model = clientModel;
  }
  get    = async (filter = {})        => await this.model.find(filter)
  getBy  = async (filter)             => await this.model.findOne(filter)
  create = async (newElement)         => await this.model.create(newElement)
  update = async (eid, elementUpdate) => await this.model.findOneAndUpdate({_id: eid}, elementUpdate)
  delete = async (uid)                => await this.model.findOneAndDelete({_id: uid})
}
