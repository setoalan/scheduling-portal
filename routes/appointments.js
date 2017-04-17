import express from 'express';
import appointment from '../models/appointment';

const appointmentRouter = express.Router();

appointmentRouter.route('/')
  .get((req, res, next) => {
    appointment
      .find({})
      .exec((err, appointments) => {
        if (err) throw err;
        res.json(appointments);
      });
  });

appointmentRouter.route('/:appointmentId')
  .get((req, res, next) => {
    appointment
      .findById(req.params.appointmentId)
      .exec((err, appointment) => {
        if (err) throw err;
        res.json(appointment);
      });
  });

module.exports = appointmentRouter;
