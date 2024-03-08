import DaoMongo from "../custom.dao.mongo.js";
import usersModel from "../model/users.model.js";

export default class UserDaoMongo  extends DaoMongo{
  constructor() {
    super (usersModel);
  }
}