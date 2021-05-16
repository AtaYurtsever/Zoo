var express = require('express');
const { allAnimals, animal_info } = require('../database/get');
const { createTables } = require('../database/tables');
var router = express.Router();


router.get('/', async function(req, res, next) {
  allAnimals().then(val => res.send(val))
});

router.post('/get', async function(req, res, next) {
  animal_info(req.body.name, req.body.type).then(val => res.send(val))
});




module.exports = router;