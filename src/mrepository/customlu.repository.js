
export default class CustomRepositoryLU {
  constructor(dao) {
    this.dao = dao;
  }
  get    = async (filter)             => await this.dao.get(filter)
  getBy  = async (filter)             => await this.dao.getBy(filter)
  create = async (newElement)         => await this.dao.create(newElement)
  update = async (eid, elementUpdate) => {
    const elementToUpdate = new LastUpdateDTO(elementUpdate);
    return await this.dao.update({_id: eid}, elementToUpdate)}
  delete = async (uid)                => await this.dao.delete({_id: uid})
}