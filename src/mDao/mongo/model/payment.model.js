import { Schema, model } from 'mongoose'
import mongososePaginate from 'mongoose-paginate-v2'

const paymentSchema = Schema({
  atCreated:          { type: Date,   default: Date() },
  due:                { type: Number, required: true },
  amount:             { type: Number, precision: 2, required: true },
})

paymentSchema.plugin(mongososePaginate)

export default model('payments', paymentSchema)