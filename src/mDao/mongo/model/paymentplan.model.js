import { Schema, model } from 'mongoose'
import mongososePaginate from 'mongoose-paginate-v2'

const paymentPlanschema = Schema({
  code:               { type: String, unique: true, required: true },
  name:               { type: String, required: true },
  dues:               { type: Number, required: true },
  interest:           { type: String, required: true, enum: ['simple', 'compuesto'] },
  interestRate:       { type: Number, precision: 2, required: true },
  interestdefault:    { type: String, required: true, enum: ['simple', 'compuesto']  },
  interestdefaultRate:{ type: Number, precision: 2, required: true },
  atCreated:          { type: Date,   default: Date() }
})

paymentPlanschema.plugin(mongososePaginate)

export default model('paymentsPlans', paymentPlanschema)