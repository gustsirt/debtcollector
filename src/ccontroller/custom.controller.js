export default class CustomController {
  constructor(service) {
    this.service = service;
  }

  gets   = async (req, res) => {
    try {
      const element = await this.service.get();
      res.sendSuccessOrNotFound(element);
    } catch (error) {
      res.sendCatchError(error, "An error occurred in the API request");
    }
  }

  get    = async (req, res) => {
    const {eid} = req.params
    try {
      const element = await this.service.getBy({_id: eid});
      res.sendSuccessOrNotFound(element);
    } catch (error) {
      res.sendCatchError(error, "An error occurred in the API request");
    }
  }

  create = async (req, res) => {
    const newElement = req.body
    try {
      const element = await this.service.create(newElement);
      res.sendSuccess(element)
    } catch (error) {
      res.sendCatchError(error, "An error occurred in the API request");
    }
  }

  update = async (req, res) => {
    const {eid} = req.params
    const newElement = req.body
    try {
      const element = await this.service.update({_id: eid}, newElement);
      res.sendSuccess(element);
    } catch (error) {
      res.sendCatchError(error, "An error occurred in the API request");
    }
  }

  delete = async (req, res) => {
    const {eid} = req.params
    try {
      const element = await this.service.delete({_id: eid});
      res.sendSuccessOrNotFound(element);
    } catch (error) {
      res.sendCatchError(error, "An error occurred in the API request");
    }
  }
}