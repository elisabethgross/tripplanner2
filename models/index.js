var db = require('../db');
var Sequelize = require('sequelize');

var place = require('./place');
var hotel = require('./hotel');
var activity = require('./activity');
var restaurant = require('./restaurant');

hotel.belongsTo(place);
activity.belongsTo(place);
restaurant.belongsTo(place);

module.exports = db;

