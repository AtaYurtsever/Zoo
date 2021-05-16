var express = require('express');
const { invited, requested } = require('../database/get');
const { updateInvite, updateTreatment } = require('../database/insert');
var router = express.Router();

router.post('/invited', function(req, res, next) {
  invited(req.body).then(v => res.send(v))
});

router.post('/requested', function(req, res, next) {
  requested(req.body).then(v => res.send(v))
});

router.post('/inviteUpdate', function(req, res, next) {
  updateInvite(req.body)
  res.send("all good")
});

router.post('/treatmentUpdate', function(req, res, next) {
  updateTreatment(req.body)
  res.send("all good")
});


module.exports = router;