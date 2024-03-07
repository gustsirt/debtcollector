import CustomController from "./custom.controller.js";
import { clientsService } from "../repository/service.js";

export default class ClientsController extends CustomController {
  constructor() {
    super(clientsService);
  }
}
