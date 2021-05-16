var express = require('express');
const { allGroupTours } = require('../database/get');
const { createTables } = require('../database/tables');
var router = express.Router();

router.get('/', async function(req, res, next) {
    allEducationalEvents().then(val => res.send(val))
});

module.exports = router;