var express = require('express');
const { invited, requested, cages, regularized, food } = require('../database/get');
const { updateInvite, updateTreatment, insertTreatment, insertRegularize, deleteRegularize } = require('../database/insert');
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

router.post('/cages',function(req, res, next) {
  cages(req.body.username).then(v => res.send(v))
});

router.post('/regularized',function(req, res, next) {
  regularized(req.body.username).then(v => res.send(v))
});

router.get('/food',function(req, res, next) {
  food().then(v => res.send(v))
});

router.post('/insertTreatment',function(req, res, next) {
  insertTreatment(req.body)
    res.send("all good")

});

router.post('/insertRegularize',function(req, res, next) {
  insertRegularize(req.body)
  res.send("all good")

});

router.post('/deleteRegularize',function(req, res, next) {
  deleteRegularize(req.body)
  res.send("all good")

});

module.exports = router;