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
    // Using + operator to coerce variables to numbers to avoid string concatenation
    'add':      function(a,b) { return +a + +b },
    'subtract': function(a,b) { return a - b },
    'multiply': function(a,b) { return a * b },
    'divide':   function(a,b) { return a / b },
  };

  // Determine the operation

  if (! req.query.operation) {
    throw new Error("Unspecified operation");
  }

  var operation = operations[req.query.operation];

  if (! operation) {
    throw new Error("Invalid operation: " + req.query.operation);
  }

  // Validate operands

  if (! req.query.operand1 ||
      ! req.query.operand1.match(/^(-)?[0-9\.]+(e(-)?[0-9]+)?$/) ||
      req.query.operand1.replace(/[-0-9e]/g, '').length > 1) {
    throw new Error("Invalid operand1: " + req.query.operand1);
  }

  if (! req.query.operand2 ||
      ! req.query.operand2.match(/^(-)?[0-9\.]+(e(-)?[0-9]+)?$/) ||
      req.query.operand2.replace(/[-0-9e]/g, '').length > 1) {
    throw new Error("Invalid operand2: " + req.query.operand2);
  }

  var operand1 = parseInt(req.query.operand1, 10);
  var operand2 = parseInt(req.query.operand2, 10);

  res.json({ result: operation(req.query.operand1, req.query.operand2) });
};
