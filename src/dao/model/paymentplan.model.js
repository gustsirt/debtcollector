import { Schema, model } from 'mongoose'
import mongososePaginate from 'mongoose-paginate-v2'

const paymentPlanschema = Schema({
  installment:        { type: Number, required: true },
  installmentAmount:  { type: Number, required: true, precision: 2 },
  interest:           { type: String, required: true, enum: ['simple', 'compound'] },
  interestRate:       { type: Number, required: true, precision: 2 }
})

export default model('paymentsPlans', paymentPlanschema)