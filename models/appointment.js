import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
  date: {
    type: Date,
    required: true,
    default: Date.now // TODO: remove later
  },
  subject: {
    type: String,
    required: true
  },
  message: {
    type: String,
    default: '-'
  },
  status: {
    type: String,
    default: 'pending'
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
