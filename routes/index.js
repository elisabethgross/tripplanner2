var express = require('express');
var router = express.Router();
var Promise = require('bluebird');

var models = require('../models');
var place = require('../models/place');
var hotels = require('../models/hotel');
var activities = require('../models/activity');
var restaurants = require('../models/restaurant');

router.get('/', function(req, res, next) {
  var promise1 = hotels.findAll();
  var promise2 = activities.findAll();
  var promise3 = restaurants.findAll();

  Promise.all([promise1, promise2, promise3])
  .then(function (arr, err) {
    if (err) console.log(err);
    res.render('layout', {
      hotels: arr[0],
      activities: arr[1],
      restaurants: arr[2]
    });
  });
});

module.exports = router;
