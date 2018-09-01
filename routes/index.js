var express = require('express');
var router = express.Router();
var pachong = require('../pachong/index');
/* GET home page. */
router.get('/', function(req, res, next) {
  pachong.getYn28(function (data) {
    //console.log(data);
    res.render('index', { title: JSON.stringify(data) });
  }, function (err) {});
});

module.exports = router;
