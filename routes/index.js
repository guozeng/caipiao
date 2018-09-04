var express = require('express');
var router = express.Router();
var pachong = require('../pachong/index');
var hq_model = require('../models/hq_model');

/* GET home page. */
router.get('/', function(req, res, next) {
  pachong.getJnd28(function (data) {
    res.render('index', { model: hq_model, data: data });
  }, function (err) {});
});
router.get('/pcdd', function(req, res, next) {
  pachong.getPcdd(function (data) {
    res.render('index', { model: hq_model, data: data });
  }, function (err) {});
});
router.get('/yn28', function(req, res, next) {
  pachong.getYn28(function (data) {
    res.render('index', { model: hq_model, data: data });
  }, function (err) {});
});

module.exports = router;
