var express = require('express');
var router = express.Router();
var pachong = require('../pachong/index');
var hq_model = require('../models/hq_model');

/* GET home page. */
router.get('/', function(req, res, next) {
  pachong.getYn28(function (data) {
    res.render('index', { model: hq_model, data: data });
  }, function (err) {});
});

module.exports = router;
