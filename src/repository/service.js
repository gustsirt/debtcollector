import CustomRepository from "./custom.repository.js";
import CustomRepositoryLU from "./customlu.repository.js";

import { ClientClass, PaymentClas, PaymentPlanClass, ProductClass, TransactionClass } from "../dao/factory.js";


export const clientsService       = new CustomRepositoryLU (new ClientClass())
export const productsService      = new CustomRepositoryLU (new ProductClass())
export const transactionsService  = new CustomRepositoryLU (new TransactionClass())
export const paymentService       = new CustomRepository   (new PaymentClass())
export const paymentPlanService   = new CustomRepository   (new PaymentPlanClass())