import CustomController from "./custom.controller.js";
import { usersService } from "../repository/service.js";

export default class UsersController extends CustomController {
  constructor() {
    super(usersService);
  }
}