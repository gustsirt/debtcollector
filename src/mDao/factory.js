// TODO agregar elementClass en el facory
/*import ProductClass from "./mongo/products.daomongo.js";
import CartClass from "./mongo/cart.daomongo.js";
import UserClass from "./mongo/user.daomongo.js"; //use CartClass
import MessageClass from "./mongo/messages.daomongo.js";

export { ProductClass, UserClass, MessageClass, CartClass }*/


/*import configObject, { MongoSingleton } from "../config/index.js";
//import ClientDaoMongo from "./mongo/client.dao.mongo.js";

export let ClientsDao;

switch (configObject.persistence) {
  case "mongo":
    default:
      //MongoSingleton.getInstance();
      const {default: ClientDaoMongo} = await import("./mongo/client.dao.mongo.js")
      ClientsDao = ClientDaoMongo;
    break;
}*/

// const ProductDao = (await import('ruta/del/archivo')).default
// npm create vite@latest ecommerc-client (en una carpeta diferente)