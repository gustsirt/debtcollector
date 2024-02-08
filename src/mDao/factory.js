import configObject, { MongoSingleton } from "../config/index.js";
import ClientDaoMongo from "./mongo/client.dao.mongo.js";

export let ClientsDao;

switch (configObject.persistence) {
  case "mongo":
    default:
      //MongoSingleton.getInstance();
      ClientsDao = ClientDaoMongo;
    break;
}