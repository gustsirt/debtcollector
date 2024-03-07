import CustomRouter from "./custom.route.js"
import UsersController from "../../controller/users.controller.js";

const cControl = new UsersController()

export default class UserCRouter extends CustomRouter {
  constructor() {
    super(cControl);
  }
}