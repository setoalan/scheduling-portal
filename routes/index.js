const express = require('express');
const indexRouter = express.Router();

indexRouter.get('/', (req, res, next) => {
  res.render('index', { title: 'Tempus Code Challenge' });
});

module.exports = indexRouter;
