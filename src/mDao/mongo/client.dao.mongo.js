import DaoMongo from "./dao.mongo.js";
import clientModel from "./model/client.model.js";

export default class ClientDaoMongo  extends DaoMongo{
  constructor() {
    super (clientModel);
  }
}