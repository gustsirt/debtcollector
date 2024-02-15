import { Schema, model } from 'mongoose'
import mongososePaginate from 'mongoose-paginate-v2'

const productSchema = new Schema({
  title:        { type: String, required: true },
  code:         { type: String, uppercase: true, required: true, unique: true },
  description:  { type: String  },
  status:       { type: String  },
  category1:    { type: String, lowercase: true, default: "Generic" },
  category2:    { type: String, lowercase: true, default: "Generic" },
  price:        { type: Number, precision: 2, required: true },
  thumbnail:    { type: String, lowercase: true },
  atCreated:    { type: Date,   default: Date() },
  lastupdated:  { type: Date,   required: true, default: Date()}
});

productSchema.plugin(mongososePaginate)

export default model('products', productSchema);