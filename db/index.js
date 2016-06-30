var Sequelize = require('sequelize');
var db = new Sequelize('postgres://localhost/tripplanner2', {
  logging : false
});

module.exports = db;
