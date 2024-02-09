import { ClientsDao } from "../mdao/factory.js";
import ClientsRepository from "./clients.repository.js";

export const clientsService = new ClientsRepository (new ClientsDao())