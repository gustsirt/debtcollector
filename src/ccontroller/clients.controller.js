import { clientsService } from "../mrepository/service.js";

export default class ClientsController {
  constructor() {
    this.service = clientsService;
  }

  gets   = async (req, res) => {
    try {
      const clients = await this.service.get();
      res.sendSuccessOrNotFound(clients, "Clients");
    } catch (error) {
      res.sendCatchError(error, "An error occurred in the API request");
    }
  }

  get    = async (req, res) => {
    const {eid} = req.params
    try {
      const client = await this.service.getBy({_id: eid});
      res.sendSuccessOrNotFound(client, "Client");
    } catch (error) {
      res.sendCatchError(error, "An error occurred in the API request");
    }
  }

  create = async (req, res) => {
    const newClient = req.body
    try {
      const client = await this.service.create(newClient);
      res.sendSuccess(client)
    } catch (error) {
      res.sendCatchError(error, "An error occurred in the API request");
    }
  }

  update = async (req, res) => {
    const {eid} = req.params
    const newClient = req.body
    try {
      const client = await this.service.update({_id: eid}, newClient);
      res.sendSuccess(client);
    } catch (error) {
      res.sendCatchError(error, "An error occurred in the API request");
    }
  }

  delete = async (req, res) => {
    const {eid} = req.params
    try {
      const client = await this.service.delete({_id: eid});
      res.sendSuccessOrNotFound(client, "Client");
    } catch (error) {
      res.sendCatchError(error, "An error occurred in the API request");
    }
  }
}