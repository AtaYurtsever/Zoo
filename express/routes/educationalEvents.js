var express = require('express');
const { allEducationalEvents, educationalEvent } = require('../database/get');
const { createTables } = require('../database/tables');
var router = express.Router();

router.get('/', async function(req, res, next) {
    allEducationalEvents().then(val => res.send(val))
});

router.get('/:name', async function(req, res, next) {
    educationalEvent(req.params.name).then(val => res.send(val)) 
});

module.exports = router;