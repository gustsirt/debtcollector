import { Schema, model } from 'mongoose'
import mongososePaginate from 'mongoose-paginate-v2'

const userSchema = Schema({
  first_name:   { type: String,  required: true },
  last_name:    { type: String },
  celphone:     { type: String },
  address:      { type: String },
  email:        { type: String,  required: true,  unique: true },
  birthday:     { type: Date },
  password:     { type: String,  required: true },
  role:         { type: String,  default: "user" },
  atCreated:    { type: Date,   default: Date() }
})

userSchema.plugin(mongososePaginate)

export default model('users', userSchema)