import { ClientsDao } from "../mDao/factory.js";
import ClientsRepository from "./clients.repository.js";

export const clientsService = new ClientsRepository (new ClientsDao())