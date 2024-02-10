import CustomController from "./custom.controller.js";
import { clientsService } from "../mrepository/service.js";

export default class ClientsController extends CustomController {
  constructor() {
    super(clientsService);
  }
}