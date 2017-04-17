import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
  date: {
    type: Date,
    require: true
  },
  subject: {
    type: Number,
    require: true
  },
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  doctor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
},
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Appointment', appointmentSchema);
