var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("hey");
  res.status(200).send({"hello": "world"})
  //res.render('index', { title: 'Express' });
});

module.exports = router;
