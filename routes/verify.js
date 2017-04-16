var User = require('../models/user');
var jwt = require('jsonwebtoken');
var config = require('../config.js');

exports.getToken = (user) => {
  return jwt.sign(user, config.secretKey, {
    expiresIn: 3600
  });
};

exports.verifyUser = (req, res, next) => {
  const token = req.body.token || req.query.token || req.headers['x-access-token'];

  if (token) {
    jwt.verify(token, config.secretKey, (err, decoded) => {
      if (err) {
        let err = new Error('You are not authenticated!');
        err.status = 401;
        return next(err);
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    const err = new Error('Please log in!');
    err.status = 403;
    return next(err);
  }
};

exports.verifyDoctor = (req, res, next) => {
  const token = req.body.token || req.query.token || req.headers['x-access-token'];

  if (token) {
    jwt.verify(token, config.secretKey, (err, decoded) => {
      if (err) {
        let err = new Error('You are not authenticated!');
        err.status = 401;
        return next(err);
      } else {
        req.decoded = decoded;
        if (req.decoded._doc.doctor) {
          next();
        } else {
          let err = new Error('You are not authorized to perform this operation!');
          err.status = 403;
          return next(err);
        }
      }
    });
  } else {
    let err = new Error('Please log in!');
    err.status = 403;
    return next(err);
  }
};
