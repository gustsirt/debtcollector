import clientsModel from "./model/client.model";

class clientDaoMongo {
  constructor() {
    this.model = clientsModel;
  }
  get = async () => await this.model.find({})
  getBy = async (filter) => await this.model.find(filter)
  create = async () => {}
  update = async () => {}
  delete = async () => {}


  // createUser = async (newUser) => {
  //   newUser.cart = await cartsService.create();
  //   await this.model.create(newUser)
  // }
  // updateUser = async (uid, userUpdate) => await this.model.findOneAndUpdate({_id: uid}, userUpdate)
  // deleteUser = async (uid) => await this.model.findOneAndDelete({_id: uid})
}

export default clientDaoMongo;
