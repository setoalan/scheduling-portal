const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');
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
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Appointment'
    }
  ],
  doctor: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

userSchema.plugin(passportLocalMongoose)

module.exports = mongoose.model('User', userSchema);
