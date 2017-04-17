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


userRouter.route('/login')
  .post((req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
      if (err) return next(err);
      if (!user) return res.status(401).json(info);

      req.logIn(user, (err) => {
        if (err) return res.status(500).json({ err: 'Could not log in user' });

        const token = Verify.getToken(user);

        if (user.doctor) {
          res.status(200).json({ user, token });
        } else {
          res.status(200).json({ user, token });
        }
      });
    })(req, res, next);
  });

userRouter.route('/me')
  .get((req, res, next) => {
    console.log('getting personal info');
    res.status(200).json({me:true});
    // User
    //   .findById(req.decoded._doc._id)
    //   .populate({
    //     path: 'appointments',
    //     model: 'Appointment',
    //     populate: {
    //       path: 'doctor',
    //       model: 'User'
    //     }
    //   })
    //   .exec((err, user) => {
    //     if (err) throw err;
    //     res.render('user', { user, token: req.query.token });
    //   });
  });

userRouter.route('/:userId')
.get((req, res, next) => {
  console.log('asdfs');
  User
  .findById(req.params.userId)
  .exec((err, user) => {
    if (err) throw err;
    res.json(user);
  });
});

module.exports = userRouter;
