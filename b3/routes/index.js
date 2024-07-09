var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'AND 103 - Lab 2',
    student: 'Huynk - PH38086',
  });
});

module.exports = router;
