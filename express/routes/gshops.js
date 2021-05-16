var express = require('express');
const { allShops, gifts, profit, soldStuff, giftsSearch } = require('../database/get');
const { buy } = require('../database/insert');
const { createTables } = require('../database/tables');
var router = express.Router();


router.get('/shops', async function(req, res, next) {
  allShops().then(val => res.send(val))
});

router.get('/shops/:shop', async function(req, res, next) {
  gifts(req.params.shop).then(val => res.send(val)) 
});

router.post('/search', async function(req, res, next) {
  giftsSearch(req.body).then(val => res.send(val)) 
});

router.post('/buy', async function(req, res, next) {
  console.log(req.body);
  buy(req.body).then(val => res.send(val))  
});

router.post('/profit', async function(req, res, next) {
  profit(req.body.username).then(v => res.send(v))
});

router.post('/soldStuff', async function(req, res, next) {
  soldStuff(req.body.username).then(v => res.send(v))
});

module.exports = router;