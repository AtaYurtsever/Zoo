var express = require('express');
const { login, visitor, gsm, vet, vets, keeper } = require('../database/get');
const { insertVisitor, addMoney } = require('../database/insert');
var router = express.Router();

router.post('/register', function(req, res, next) {
  insertVisitor({...req.body})
  res.send(true);
});

router.post('/login', async function(req, res, next) {
  login(req.body.username, req.body.password).then(v => res.send(v))
});

router.post('/visitor', async function(req, res, next) {
  visitor(req.body.username).then(v => res.send(v))
});

router.post('/gsm', async function(req, res, next) {
  gsm(req.body.username).then(v => res.send(v))
});

router.post('/keeper', async function(req, res, next) {
  keeper(req.body.username).then(v => res.send(v))
});

router.post('/vet', async function(req, res, next) {
  vet(req.body.username).then(v => res.send(v))
});

router.get('/vets', async function(req, res, next) {
  vets().then(v => res.send(v))
});



router.post('/money', async function(req, res, next) {
  addMoney(req.body).then(v => res.send(v))
});

module.exports = router;
