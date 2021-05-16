var express = require('express');
const { allGroupTours, groupTour } = require('../database/get');
const { createTables } = require('../database/tables');
var router = express.Router();

router.get('/', async function(req, res, next) {
    allGroupTours().then(val => res.send(val))
});

router.get('/:name', async function(req, res, next) {
    groupTour(req.params.shop).then(val => res.send(val)) 
});

module.exports = router;