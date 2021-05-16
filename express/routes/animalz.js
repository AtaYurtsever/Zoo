var express = require('express');
const { allAnimals, animals } = require('../database/get');
const { createTables } = require('../database/tables');
var router = express.Router();


router.get('/', async function(req, res, next) {
  allAnimals().then(val => res.send(val))
});


module.exports = router;