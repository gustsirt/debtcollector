import CustomRepository from "../libraries/customs/repository.js";
import CustomRepositoryLU from "../libraries/customs/repository.lu.js";

import { ClientClass, PaymentClass, PaymentPlanClass, ProductClass, TransactionClass } from "../dao/factory.js";


export const clientsService       = new CustomRepositoryLU (new ClientClass())
export const productsService      = new CustomRepositoryLU (new ProductClass())
export const transactionsService  = new CustomRepositoryLU (new TransactionClass())
export const paymentService       = new CustomRepository   (new PaymentClass())
export const paymentPlanService   = new CustomRepository   (new PaymentPlanClass())