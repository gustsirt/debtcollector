import { Schema, model } from 'mongoose'
import mongososePaginate from 'mongoose-paginate-v2'

const productSchema = new Schema({
  title:        { type: String, required: true },
  description:  { type: String, required: true },
  status:       { type: String  },
  category1:    { type: String, lowercase: true, required: true },
  category2:    { type: String, lowercase: true, required: true },
  code:         { type: String, uppercase: true, required: true },
  amount:       { type: Number, precision: 2, required: true },
  thumbnail:    { type: String, lowercase: true },
  atCreated:    { type: Date,   default: Date() }
});

productSchema.plugin(mongososePaginate)

export default model('products', productSchema);