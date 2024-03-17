import CustomRepositoryLU from "../../libraries/customs/repository.lu.js";

import { UserClass } from "./factory.js";

export const usersService = new CustomRepositoryLU (new UserClass())