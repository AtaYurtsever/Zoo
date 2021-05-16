var express = require('express');
const { allEducationalEvents, educationalEvent, allComments, allComplaintForms } = require('../database/get');
const { createTables } = require('../database/tables');
var router = express.Router();

router.get('/', async function(req, res, next) {
    allEducationalEvents().then(val => res.send(val))
});

router.get('/:name', async function(req, res, next) {
    educationalEvent(req.params.name).then(val => res.send(val)) 
});

router.get('/comment/:name', async function(req, res, next) {
    allComments(req.params.name).then(val => res.send(val))
});

router.get('/complaint/:name', async function(req, res, next) {
    allComplaintForms(req.params.name).then(val => res.send(val))
});

module.exports = router;