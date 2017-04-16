const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Users = require('../models/user');

const userRouter = express.Router();

userRouter.use(bodyParser.json());

userRouter.route('/')
  .get((req, res, next) => {
    Users
      .find({type: 'patient'})
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
