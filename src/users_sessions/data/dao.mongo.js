import DaoMongo from "../../libraries/customs/dao.mongo.js";
import usersModel from "./model.js";

export default class UserDaoMongo  extends DaoMongo{
  constructor() {
    super (usersModel);
  }
}