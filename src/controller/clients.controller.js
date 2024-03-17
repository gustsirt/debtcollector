import CustomController from "../libraries/customs/controller.js";
import { clientsService } from "../repository/service.js";

export default class ClientsController extends CustomController {
  constructor() {
    super(clientsService);
  }
}
