import { Schema, model } from 'mongoose'
import mongososePaginate from 'mongoose-paginate-v2'

const paymentSchema = Schema({
  payments:        { type: [
    {
      number:         { type: Number, required: true  },
      expiration:     { type: Date,   required: true  },
      amount:         { type: Number, required: true, precision: 2 },
      interest:       { type: Number, required: true, precision: 2 },
      pay:            { type: Number, required: true, precision: 2 },
      status:         { type: String, required: true, enum: ['payable', 'pending', 'incomplete', 'paid', 'overdue'] },
      lastupdated:    { type: Date,   required: true, default: Date() }
    }
  ], required: true }
})

paymentSchema.plugin(mongososePaginate)

export default model('payments', paymentSchema)