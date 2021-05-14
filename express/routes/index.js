var express = require('express');
const { createTables } = require('../database/tables');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(createTables())
  res.send("hi")
});

module.exports = router;
