import { Schema, model } from 'mongoose'
import mongososePaginate from 'mongoose-paginate-v2'

const transactionSchema = new Schema({
  status:       { type: String  },
  client:       { type: Schema.Types.ObjectId, ref: 'clients',       required: true},
  product:      { type: Schema.Types.ObjectId, ref: 'products',      required: true},
  paymentPlan:  { type: Schema.Types.ObjectId, ref: 'paymentsPlans', required: true},
  payments:     { type: Schema.Types.ObjectId, ref: 'payments',      required: true},
  atCreated:    { type: Date,   default: Date() },
  lastupdated:  { type: Date,   required: true, default: Date()}
});

transactionSchema.pre("findOne", function () {
  this.populate('product');
  this.populate('client');
  this.populate('paymentPlan');
  this.populate('payments');
});

/*({
    path: 'client',  // Corrección: usar 'client' directamente
    select: 'name address',  // Ejemplo de selección de campos específicos
  }) */
  
transactionSchema.plugin(mongososePaginate)

export default model('transactions', transactionSchema);