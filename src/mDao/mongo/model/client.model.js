import { Schema, model } from 'mongoose'
import mongososePaginate from 'mongoose-paginate-v2'

const clientSchema = Schema({
  first_name:   { type: String,  required: true },
  last_name:    { type: String },
  celphone:     { type: String },
  address:      { type: String },
  email:        { type: String,  required: true,  unique: true },
  birthday:     { type: Date },
  atCreated:    { type: Date,   default: Date() }
})

clientSchema.plugin(mongososePaginate)

export default model('clients', clientSchema)