const express = require('express');
const indexRouter = express.Router();

indexRouter.get('/', (req, res, next) => {
  console.log('asfs');
  res.render('index', { title: 'Tempus Code Challenge' });
});

module.exports = indexRouter;
