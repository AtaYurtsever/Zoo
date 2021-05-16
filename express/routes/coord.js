var express = require('express');
const {  invite  } = require('../database/get');
const { insertInvite, insertCreates } = require('../database/insert');
var router = express.Router();

router.post('/invite', function(req, res, next) {
  invite(req.body).then(v => res.send(v))
});


router.post('/NewInvite', function(req, res, next) {
  insertInvite(req.body)
  res.send("all good")
});

router.post('/CreateEvent', function(req, res, next) {
  insertCreate(req.body)
  res.send("all good")
});


module.exports = router;