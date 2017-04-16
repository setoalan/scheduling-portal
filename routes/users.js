const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');

const Users = require('../models/user');
const Verify = require('./verify');

const userRouter = express.Router();
userRouter.use(bodyParser.json());

userRouter.route('/')
  .get(Verify.verifyDoctor, (req, res, next) => {
    Users
      .find({doctor: false})
      .exec((err, users) => {
        if (err) throw err;
        res.render('users', { users });
      });
  });

userRouter.route('/:userId')
  .get((req, res, next) => {
    Users
      .findById(req.params.userId)
      .exec((err, user) => {
        if (err) throw err;
        res.render('user', user);
      });
  });

module.exports = userRouter;
