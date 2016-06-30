var express = require('express');
var app = express();

var swig = require('swig');
var bodyParser = require('body-parser');

// swig templating boilerplate setup
app.engine('html', swig.renderFile); // how to render html templates
app.set('view engine', 'html'); // what file extension do our templates have
app.set('views', __dirname + '/views'); // where to find the views
swig.setDefaults({ cache: false });

// body parsing middleware
app.use(bodyParser.urlencoded({ extended: true })); // for HTML form submits
app.use(bodyParser.json()); // would be for AJAX requests
//now can use 'req.body' to access form submit contents when posted

app.use(express.static(__dirname + './public'));

app.use('/', require('./routes'));

// CATCH 404 AND FORWARD TO ERROR HANDLER
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// HANDLE ALL ERRORS
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  console.log(err);
  res.render('There was an error');
});

app.listen(3000, function() {
  console.log('Listening on port 3000');
});
