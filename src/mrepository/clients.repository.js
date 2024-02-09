import ClientDTO from "../mDto/client.dto.js";
import CustomRepository from "./custom.repository.js";

export default class ClientsRepository extends CustomRepository{
  constructor(dao) {
    super(dao)
  }
  update = async (eid, elementUpdate) => {
    const elementToUpdate = new ClientDTO(elementUpdate);
    return await this.dao.update({_id: eid}, elementToUpdate)}
}

/*export default class ClientsRepository {
  constructor(dao) {
    this.dao = dao;
  }
  get    = async (filter)             => await this.dao.get(filter)
  getBy  = async (filter)             => await this.dao.getBy(filter)
  create = async (newElement)         => await this.dao.create(newElement)
  update = async (eid, elementUpdate) => {
    const elementToUpdate = new ClientDTO(elementUpdate);
    return await this.dao.update({_id: eid}, elementToUpdate)}
  delete = async (uid)                => await this.dao.delete({_id: uid})
}*/