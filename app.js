var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var stylus = require('stylus')
var nib = require('nib');
var i18n = require('i18next');
var Promise = require('promise');

// routes
// home page
var routes = require('./routes/index');
// contact email
var email = require('./routes/sendEmail');
// youthcouncil 2015 routes
var youthcouncils2015 = require('./routes/youthcouncil2015');
// youthcouncil 2013 routes
var youthcouncils2013 = require('./routes/youthcouncil2013');

var app = express();


// initialization of the language framework
i18n.init({
  saveMissing: true,
  lng: 'en-US',
  debug: true,
  fallbackLng: 'en-US'
});

function compile(str, path) {
  return stylus(str)
  .set('translation', path)
  .use(nib())
}



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));

// use i18next module
app.use(i18n.handle);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('stylus').middleware({src : __dirname + '/public' ,compile: compile} ));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/sendEmail',email.sendEmail);
// redirect to facebook page
app.use('/facebookpage',routes);
// youth council 2015
app.get('/youthcouncil2015',youthcouncils2015.youthcouncil2015);
app.get('/download_calendar',youthcouncils2015.downloadCalendar);
// youth council 2013
app.get('/youthcouncil2013',youthcouncils2013.youthcouncil2013);
app.get('/newspaperAout',youthcouncils2013.downloadFirstEdition);
app.get('/newspaperSept',youthcouncils2013.downloadSecondEdition);
app.get('/guidebook',youthcouncils2013.downloadGuideBook);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

// call i18n.registerAppHelper(app) which registers express with i18next
i18n.registerAppHelper(app);



module.exports = app;
