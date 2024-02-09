import { Schema, model } from 'mongoose'
import mongososePaginate from 'mongoose-paginate-v2'

const transactionSchema = new Schema({
  status:       { type: String  },
  amount:       { type: Number, precision: 2, required: true },
  client:       { type: Schema.Types.ObjectId, ref: 'clients'},
  product:      { type: Schema.Types.ObjectId, ref: 'products'},
  atCreated:    { type: Date,   default: Date() },
  lastupdated:  { type: Date,   required: true, default: Date()}
});

transactionSchema.plugin(mongososePaginate)

export default model('transactions', transactionSchema);