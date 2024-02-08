import { clientsService } from "../mrepository/service.js";

export default class ClientsController {
  constructor() {
    this.service = clientsService;
  }

  gets = async (req, res) => {
    try {
      const clients = await this.service.get();
      res.sendSuccess(clients);
    } catch (error) {
      res.sendCatchError(error, "An error occurred in the API request");
    }
  }
}