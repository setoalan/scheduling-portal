import express from 'express';
import jwt from 'jsonwebtoken';
import moment from 'moment';

import config from '../../config';
import Users from '../models/user';

const authRouter = express.Router();

const createToken = (id, name, doctor) => {
  const payload = {
    name,
    doctor,
    _id: id,
    expires: moment().add(1, 'day').unix()
  };
  return jwt.sign(payload, config.secretKey);
};

const verifyAuth = (req, res, next) => {
  const token = req.headers['x-access-token'];
  if (token) {
    jwt.verify(token, config.secretKey, (err, payload) => {
      if (err) {
        return res.status(403).send({ message: 'Failed to authenticate token' });
      } else {
        next();
      }
    })
  } else {
    return res.status(403).send({ message: 'No token provided' });
  }
};

authRouter.route('/login')
  .post((req, res, next) => {
    Users.findOne({ username:req.body.username }, '+password', (err, user) => {
      if (!user) return res.status(401).json({ message: 'Invalid username/password' });
      user.comparePassword(req.body.password, (err, isMatch) => {
        if (!isMatch) return res.status(401).json({ message: 'Invalid username/password'});
        res.json({
          message: 'You are logged in',
          token: createToken(user._id, user.name, user.doctor)
        });
      });
    });
  });

authRouter.route('/signup')
  .post((req, res, next) => {
    Users.findOne({ username: req.body.username }, (err, existingUser) => {
      if (existingUser) return res.status(409).json({ message: 'Username is already taken' });
      const user = Object.assign(new Users(), req.body);
      user.save((err, result) => {
        if (err) res.send(err);
        res.json({
          message: 'Welcome to Tempus, you are now logged in',
          token: createToken(result._id, result.name, result.doctor)
        });
      });
    });
  });

module.exports = authRouter;
