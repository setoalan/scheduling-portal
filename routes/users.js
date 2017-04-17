import express from 'express';
import User from '../models/user';

const userRouter = express.Router();

userRouter.route('/')
  .get((req, res, next) => {
    User
      .find({})
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

module.exports = userRouter;
