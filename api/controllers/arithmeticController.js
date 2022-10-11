'use strict';

exports.calculate = function(req, res) {
  req.app.use(function(err, req, res, next) {
    if (res.headersSent) {
      return next(err);
    }

    res.status(400);
    res.json({ error: err.message });
  });

  var operations = {
    'add':      function(a,b) { return +a + +A
