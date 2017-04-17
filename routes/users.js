const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');

const User = require('../models/user');
const Verify = require('./verify');

const userRouter = express.Router();

userRouter.use(bodyParser.json());

userRouter.route('/')
  .get((req, res, next) => {
    User
      .find({doctor: false})
      .exec((err, users) => {
        if (err) throw err;
        res.json(users);
      });
  });

userRouter.route('/:userId')
  .get((req, res, next) => {
    User
      .findById(req.params.userId)
      .exec((err, user) => {
        if (err) throw err;
        res.json(user);
      });
  });

userRouter.route('/login')
  .post((req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
      if (err) return next(err);
      if (!user) return res.status(401).json(info);

      req.logIn(user, (err) => {
        if (err) return res.status(500).json({ err: 'Could not log in user' });

        const token = Verify.getToken(user);

        if (user.doctor) {
          res.status(200).json({ doctor: true, token });
        } else {
          res.status(200).json({ doctor: false, token });
        }
      });
    })(req, res, next);
  });

module.exports = userRouter;
