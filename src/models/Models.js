import mongoose from 'mongoose'

const Schema = mongoose.Schema

export const ContactSchema = new Schema({
  firstName: {
    type: String,
    required: 'first name required'
  },
  lastName: {
    type: String
  },
  email: {
    type: String
  },
  company: {
    type: String
  },
  phone: {
    type: Number
  },
  created_date: {
    type: Date,
    default: Date.now
  }
})