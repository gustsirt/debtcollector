import { Schema, model } from 'mongoose'
import mongososePaginate from 'mongoose-paginate-v2'

const userSchema = Schema({
  first_name:   { type: String,  required: true },
  last_name:    { type: String },
  code:         { type: String, required: true, unique: true },
  celphone:     { type: String },
  address:      { type: String },
  city:         { type: String, default: "" },
  state:        { type: String, default: "" },
  email:        { type: String,  required: true,  unique: true },
  //birthday:     { type: Date },
  atCreated:    { type: Date,   default: Date() },
  lastupdated:  { type: Date,   required: true, default: Date()},
  password:     { type: String,  required: true },
  role:         { type: String,  default: "user" }
})

userSchema.plugin(mongososePaginate)

export default model('users', userSchema)