const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const appointment = require('./appointment');

const userSchema = new Schema({
  username: String,
  password: String,
  name: String,
  age: {
    type: Number,
    min: 0,
    max: 150
  },
  emailAddress: String,
  mailingAddress: String,
  phoneNumber: String,
  appointments: [
    appointment.schema
  ],
  type: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);
