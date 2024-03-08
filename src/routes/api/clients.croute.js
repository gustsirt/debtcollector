import CustomRouter from "../custom.route.js"
import ClientsController from "../../controller/clients.controller.js";

const cControl = new ClientsController()
export default class ClientCRouter extends CustomRouter {
  constructor() {
    super(cControl);
  }
}