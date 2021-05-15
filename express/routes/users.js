var express = require('express');
const { login } = require('../database/get');
const { insertVisitor } = require('../database/insert');
var router = express.Router();

router.post('/register', function(req, res, next) {
  insertVisitor({...req.body})
  res.send(true);
});

router.post('/login', async function(req, res, next) {
  login(req.body.username, req.body.password).then(v => res.send(v))
});

module.exports = router;
