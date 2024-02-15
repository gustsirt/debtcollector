import { Schema, model } from 'mongoose'
import mongososePaginate from 'mongoose-paginate-v2'

const clientSchema = Schema({
  first_name:   { type: String, required: true },
  last_name:    { type: String, default: "" },
  code:         { type: String, required: true, unique: true },
  celphone:     { type: String, default: "" },
  address:      { type: String, default: "" },
  city:         { type: String, default: "" },
  state:        { type: String, default: "" },
  email:        { type: String, required: true, unique: true },
  //birthday:     { type: Date,    required: true  },
  atCreated:    { type: Date,   default: Date() },
  lastupdated:  { type: Date,   required: true, default: Date()}
})

clientSchema.plugin(mongososePaginate)

export default model('clients', clientSchema)