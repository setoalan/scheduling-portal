const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');

const Users = require('../models/user');
const Appointments = require('../models/appointment');
const Verify = require('./verify');

const userRouter = express.Router();
userRouter.use(bodyParser.json());

userRouter.route('/')
  .get(Verify.verifyDoctor, (req, res, next) => {
    Users
      .find({doctor: false})
      .exec((err, users) => {
        if (err) throw err;
        res.render('users', { users, token: req.query.token });
      });
  });

userRouter.route('/me')
  .get(Verify.verifyUser, (req, res, next) => {

    Users
      .findById(req.decoded._doc._id)
      .populate({
        path: 'appointments',
        model: 'Appointment',
        populate: {
          path: 'doctor',
          model: 'User'
        }
      })
      .exec((err, user) => {
        if (err) throw err;
        res.render('user', { user, token: req.query.token });
      });
  });

userRouter.route('/me/appointments/new')
  .get(Verify.verifyUser, (req, res, next) => {
    Users
      .find({doctor: true})
      .exec((err, doctors) => {
        if (err) throw err;
        res.render('appointment-new', { doctors, patient: req.decoded._doc._id, token: req.query.token });
      });
  })
  .post(Verify.verifyUser, (req, res, next) => {

    Appointments.create(req.body, (err, appointment) => {
      if (err) throw err;

      Users
        .findById(req.decoded._doc._id)
        .exec((err, patient) => {
          if (err) throw err;
          patient.appointments.push(appointment._id);
          patient.save((err, patient) => {
            if (err) throw err;

            Users
              .findById(req.body.doctor)
              .exec((err, doctor) => {
                if (err) throw err;
                doctor.appointments.push(appointment._id);
                doctor.save((err, doctor) => {
                  if (err) throw err;
                  res.redirect('/users/me?token=' + req.body.token);
                });
              });

          });
        });

    });
  });

userRouter.route('/me/appointments/:appointmentId')
  .get(Verify.verifyUser, (req, res, next) => {
    Appointments
      .findById(req.params.appointmentId)
      .populate('doctor')
      .exec((err, appointment) => {
        if (err) throw err;
        res.render('appointment-view', { appointment })
      })
  });

userRouter.route('/:userId')
  .get(Verify.verifyDoctor, (req, res, next) => {
    Users
      .findById(req.params.userId)
      .exec((err, user) => {
        if (err) throw err;
        res.render('user', user);
      });
  });


module.exports = userRouter;
