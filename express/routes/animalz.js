var express = require('express');
const { allAnimals, animals } = require('../database/get');
const { createTables } = require('../database/tables');
var router = express.Router();


router.get('/animals', async function(req, res, next) {
  allAnimals().then(val => res.send(val))
});

router.get('/animals/:animal', async function(req, res, next) {
  animals(req.params.shop).then(val => res.send(val)) 
});

module.exports = router;