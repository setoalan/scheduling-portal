import express from 'express';

import Users from '../models/user';

const userRouter = express.Router();

userRouter.route('/patients')
  .get((req, res, next) => {
    Users.find({ doctor: false }, (err, users) => {
      if (err) throw err;
      res.json(users);
    });
  });

userRouter.route('/doctors')
  .get((req, res, next) => {
    Users.find({ doctor: true }, (err, users) => {
      if (err) throw err;
      res.json(users);
    });
  });

userRouter.route('/:userId')
  .get((req, res, next) => {
    Users
      .findById(req.params.userId)
      .populate({
        path: 'appointments',
        model: 'Appointment',
        populate: [{
          path: 'doctor',
          model: 'User'
        }, {
          path: 'patient',
          model: 'User'
        }]
      })
      .exec((err, user) => {
        if (err) throw err;
        res.json(user);
      });
    });

module.exports = userRouter;
