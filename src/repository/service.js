import CustomRepository from "./custom.repository.js";
import CustomRepositoryLU from "./customlu.repository.js";

import { ClientClass, PaymentClass, PaymentPlanClass, ProductClass, TransactionClass, UserClass } from "../dao/factory.js";


export const clientsService       = new CustomRepositoryLU (new ClientClass())
export const productsService      = new CustomRepositoryLU (new ProductClass())
export const transactionsService  = new CustomRepositoryLU (new TransactionClass())
export const paymentService       = new CustomRepository   (new PaymentClass())
export const paymentPlanService   = new CustomRepository   (new PaymentPlanClass())
export const usersService         = new CustomRepositoryLU (new UserClass())