var express = require('express');
const { insertVisitor } = require('../database/insert');
var router = express.Router();

/* GET users listing. */
router.post('/register', function(req, res, next) {
  insertVisitor({...req.body})
  res.send(true);
});

module.exports = router;
