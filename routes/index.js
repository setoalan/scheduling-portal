const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');

const User = require('../models/user');
const Verify = require('./verify');

const indexRouter = express.Router();
indexRouter.use(bodyParser.json());

indexRouter.route('/')
  .get((req, res, next) => {
    res.render('index', { title: 'Tempus Code Challenge' });
  });

indexRouter.route('/register')
  .post((req, res) => {
    User.register(
      new User({ username : req.body.username }),
      req.body.password,
      (err, user) => {
        if (err) return res.status(500).json({ err: err });

        user.save((err, user) => {
          passport.authenticate('local')(req, res, () => {
            return res.status(200).json({ status: 'Registration Successful!' });
          });
        });
      }
    );
  });

indexRouter.route('/login')
  .get((req, res, next) => {
    res.render('login');
  })
  .post((req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
      if (err) return next(err);
      if (!user) {
        res.locals.message = info;
        res.locals.error = info;
        res.status(401);
        res.render('error');
        return;
      }

      req.logIn(user, (err) => {
        if (err) return res.status(500).json({ err: 'Could not log in user' });

        const token = Verify.getToken(user);

        if (user.doctor) {
          res.redirect(`/users?token=${token}`);
        } else {
          res.redirect(`/?token=${token}`);
        }
      });
    })(req, res, next);
  });

indexRouter.route('/logout')
  .get((req, res) => {
    req.logout();
    res.redirect('login');
  });

module.exports = indexRouter;
