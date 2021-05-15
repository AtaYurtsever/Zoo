var express = require('express');
const { allShops, gifts } = require('../database/get');
const { buy } = require('../database/insert');
const { createTables } = require('../database/tables');
var router = express.Router();


router.get('/shops', async function(req, res, next) {
  allShops().then(val => res.send(val))
});

router.get('/shops/:shop', async function(req, res, next) {
  gifts(req.params.shop).then(val => res.send(val)) 
});

router.post('/buy', async function(req, res, next) {
  console.log(req.body);
  buy(req.body).then(val => res.send(val))  
});

module.exports = router;