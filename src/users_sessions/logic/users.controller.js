import CustomController from "../../libraries/customs/controller.js";
import { usersService } from "./service.js";

export default class UsersController extends CustomController {
  constructor() {
    super(usersService);
  }
}