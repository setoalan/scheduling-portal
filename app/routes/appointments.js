import express from 'express';

import Appointments from '../models/appointment';
import Users from '../models/user';

const appointmentRouter = express.Router();

appointmentRouter.route('/')
  .get((req, res, next) => {
    Appointments.find({}, (err, appointments) => {
      if (err) throw err;
      res.json(appointments);
    });
  })
  .post((req, res, next) => {
    Appointments.create(req.body, (err, appointment) => {
      if (err) throw err;
      Users.findById(req.body.patient, (err, patient) => {
        if (err) throw err;
        patient.appointments.push(appointment._id);
        patient.save((err, patient) => {
          if (err) throw err;
          Users.findById(req.body.doctor, (err, doctor) => {
            if (err) throw err;
            doctor.appointments.push(appointment._id);
            doctor.save((err, doctor) => {
              if (err) throw err;
              res.json(appointment);
            });
          });
        });
      });
    });
  });

appointmentRouter.route('/:appointmentId')
  .get((req, res, next) => {
    Appointments.findById(req.params.appointmentId, (err, appointment) => {
      if (err) throw err;
      res.json(appointment);
    });
  })
  .put((req, res, next) => {
    Appointments.findByIdAndUpdate(req.params.appointmentId, {
      $set: req.body
    }, {
      new: true
    }, (err, appointment) => {
      if (err) throw err;
      res.json(appointment);
    });
  })
  .delete((req, res, next) => {
    Appointments.findByIdAndRemove(req.params.appointmentId, (err, appointment) => {
      if (err) throw err;
      Users.findById(appointment.patient, (err, patient) => {
        if (err) throw err;
        const index = patient.appointments.indexOf(appointment._id);
        patient.appointments.splice(index, 1);
        patient.save((err, result) => {
          if (err) throw err;
          Users.findById(appointment.doctor, (err, doctor) => {
            if (err) throw err;
            const index = doctor.appointments.indexOf(appointment._id);
            doctor.appointments.splice(index, 1);
            doctor.save((err, result) => {
              res.json(appointment);
            });
          });
        });
      });
    });
  });

module.exports = appointmentRouter;
