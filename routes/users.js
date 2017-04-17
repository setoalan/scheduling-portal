const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Users = require('../models/user');

const userRouter = express.Router();

userRouter.use(bodyParser.json());

userRouter.route('/')
  .get((req, res, next) => {
    Users
      .find({doctor: false})
      .exec((err, users) => {
        if (err) throw err;
        res.json(users);
      });
  });

userRouter.route('/:userId')
  .get((req, res, next) => {
    Users
      .findById(req.params.userId)
      .exec((err, user) => {
        if (err) throw err;
        res.json(user);
      });
  });

userRouter.route('/login')
  .post((req, res, next) => {
    
  });

module.exports = userRouter;
