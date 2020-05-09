var express = require('express');
var router = express.Router();

var data = require("../data/recipe-1.json");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/mac/python3', function(req, res, next) {
  res.send(data);
});


module.exports = router;
