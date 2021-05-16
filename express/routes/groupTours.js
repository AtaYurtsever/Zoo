var express = require('express');
const { allGroupTours } = require('../database/get');
const { createTables } = require('../database/tables');
var router = express.Router();

router.get('/gt', async function(req, res, next) {
    allGroupTours().then(val => res.send(val))
});

module.exports = router;