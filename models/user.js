import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  name: String,
  age: Number,
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
},
  {
    timestamps: true
  }
);

module.exports = mongoose.model('User', userSchema);
