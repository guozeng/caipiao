var express = require('express');
var router = express.Router();
var pachong = require('../pachong/index');
var hq_model = require('../models/hq_model');
var computeJg = require('../utils/computeJg');
var computeOther = require('../utils/computeOther');

/* GET home page. */
router.get('/', function(req, res, next) {
  pachong.getJnd28_2(function (data) {
    res.render('index', { model: hq_model, data: data, jgarr: computeJg(data), otherItems: computeOther(data) });
  }, function (err) {});
});
router.get('/pcdd', function(req, res, next) {
  pachong.getPcdd_2(function (data) {
    res.render('index', { model: hq_model, data: data, jgarr: computeJg(data), otherItems: computeOther(data) });
  }, function (err) {});
});
router.get('/yn28', function(req, res, next) {
  pachong.getYn28(function (data) {
    res.render('index', { model: hq_model, data: data, jgarr: computeJg(data), otherItems: computeOther(data) });
  }, function (err) {});
});

module.exports = router;
