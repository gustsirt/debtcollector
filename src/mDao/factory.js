import configObject, { MongoSingleton } from "../config/index.js";

export let ClientsDao;

switch (configObject.persistence) {
  case "mongo":
    default:
      //MongoSingleton.getInstance();
      const {default: ClientDaoMongo} = await import("../mdao/mongo/client.dao.mongo.js");
      ClientsDao = ClientDaoMongo;
    break;
}