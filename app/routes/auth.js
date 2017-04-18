import express from 'express';
import jwt from 'jsonwebtoken';
import moment from 'moment';

import config from '../../config';
import Users from '../models/user';

const authRouter = express.Router();

const createToken = (name) => {
  const payload = {
    sub: name,
    exp: moment().add(1, 'day').unix()
  };
  return jwt.sign(payload, config.secretKey);
};

const signup = (req, res) => {
  Users.findOne({ username: req.body.username }, (err, existingUser) => {
    if (existingUser) return res.status(409).json({ message: 'Username is already taken' });

    const user = Object.assign(new Users(), req.body);
    user.save((err, result) => {
      if (err) res.send(err);

      res.json({
        message: 'Welcome to Tempus, you are now logged in',
        token: createToken(result.name)
      });
    });
  });
};

const login = (req, res) => {
  Users.findOne({ username:req.body.username }, '+password', (err, user) => {
    if (!user) return res.status(401).json({ message: 'Invalid email/password' });

    user.comparePassword(req.body.password, (err, isMatch) => {
      if (!isMatch) return res.status(401).json({ message: 'Invalid email/password'});

      res.json({ message: 'You are logged in', token: createToken(user.name) });
    });

  });
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
  .post(login, (req, res, next) => {
    res.status(200).send({ message: 'login success' });
  });

authRouter.route('/signup')
  .post(signup, (req, res, next) => {
    res.status(200).send({ message: 'signup sucess' });
  });

module.exports = authRouter;
