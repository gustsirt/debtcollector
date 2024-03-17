import { Router } from "express";

export default class CustomRouter {
  constructor(controller) {
    this.router = Router(); // instanciar const router = Router()
    this.controller = controller;
    this.init();
  }
  init() {
    this.get    ('/',       this.controller.get)
    this.get    ('/:eid',   this.controller.getById)
    this.get    ('/filter', this.controller.getBy)
    this.post   ('/',       this.controller.create)
    this.put    ('/:eid',   this.controller.updateId)
    this.delete ('/:eid',   this.controller.deleteId)
  } //queda vacia, se usa en las instancias
  getRouter() { return this.router; } // export default routerClass

  get   (path, ...callbacksA) { this.router.get   (path, this.applyCallbacks(callbacksA)); }
  post  (path, ...callbacksA) { this.router.post  (path, this.applyCallbacks(callbacksA)); }
  put   (path, ...callbacksA) { this.router.put   (path, this.applyCallbacks(callbacksA)); }
  delete(path, ...callbacksA) { this.router.delete(path, this.applyCallbacks(callbacksA)); }

  // metodo para ejecutar nuestra callbacks [middeleware y el  (req, res) => {...}]
  applyCallbacks(callbacksArray) {
    //params = req, res, next
    return callbacksArray.map((callback) => async (...params) => {
      try {
        await callback.apply(this, params);
      } catch (error) {
        params[1].status(500).send(error);
      }
    });
  }
}
