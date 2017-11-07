var express = require('express');
var router = express.Router();

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Jumbo' });
});

router.get('/roster', function(req, res, next) {
	res.render('roster', { title: 'Jumbo' });
});

router.get('/practice', function(req, res, next) {
	console.log("caugh");
	res.render('practice', { title: 'Jumbo' });
});

router.get('/office-hours', function(req, res, next) {
	res.render('office-hours', { title: 'Jumbo' });
});

router.get('/alumni', function(req, res, next) {
	res.render('alumni', { title: 'Jumbo' });
});

router.get('/contact', function(req, res, next) {
	res.render('contact', { title: 'Jumbo' });
});

router.get('/donations', function(req, res, next) {
	res.render('donations', { title: 'Jumbo' });
});

router.get('/BE-Ultimate', function(req, res, next) {
	res.render('BE-Ultimate', { title: 'Jumbo' });
});

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("hey");
  //res.status(200).send({"hello": "world"})
  res.render('index', { title: 'Jumbo' });
});

module.exports = router;
