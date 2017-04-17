import express from 'express';
import Users from '../models/user';

const userRouter = express.Router();

userRouter.route('/')
  .get((req, res, next) => {
    Users.find({}, (err, users) => {
      if (err) throw err;
      res.json(users);
    });
  });

userRouter.route('/:userId')
  .get((req, res, next) => {
    Users.findById(req.params.userId, (err, user) => {
      if (err) throw err;
      res.json(user);
    });
  });

module.exports = userRouter;
