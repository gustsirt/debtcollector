import CustomController from "./custom.controller.js";
import { paymentPlanService, paymentService, transactionsService } from "../repository/service.js";
import dayjs from "dayjs";

export default class TransactionsController extends CustomController {
  constructor() {
    super(transactionsService);

  }
  create = async (req, res) => {
    const {
      client,
      product,
      installment,
      installmentAmount,
      interest = "simple",
      interestRate = 0.1,
      firstExpiration =  dayjs().toDate()
    } = req.body

    try {
      // 1. Crear el plan de pagos
      const paymentPlan = await paymentPlanService.create({installment, installmentAmount, interest, interestRate})

       // 2. Calcular las fechas de vencimiento y generar el array de pagos
      const payments = [];
      let currentExpiration = dayjs(firstExpiration);
      for (let i = 1; i <= installment; i++) {
        payments.push({
          number: i,
          expiration: currentExpiration.toDate(),
          amount: installmentAmount,
          interest: 0, // Inicializar interés en 0
          pay: 0, // Inicializar pago en 0
          status: "payable",
          lastupdated: Date.now(),
        });
        currentExpiration = currentExpiration.add(1, "month");
      }

      // 3. Crear los pagos utilizando paymentService
      const paymentsCreated = await paymentService.create({payments});

      // 4. Crear la transacción
      const transaction = await this.service.create({client, product, paymentPlan: paymentPlan._id, payments: paymentsCreated._id});

      res.sendSuccess(transaction )
      
    } catch (error) {
      res.sendCatchError(error, "An error occurred in the API request");
    }
  }

}