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
var localyouthcouncils2015 = require('./routes/youthcouncil2015/localYouthCouncils2015');
var projects2015 = require('./routes/youthcouncil2015/projects2015');
var training2015 = require('./routes/youthcouncil2015/training2015');
var studytrip2015 = require('./routes/youthcouncil2015/studytrip2015');
// youthcouncil 2013 routes
var localyouthcouncils2013 = require('./routes/youthcouncil2013/index2013');
var projects2013 = require('./routes/youthcouncil2013/projects2013');
var training2013 = require('./routes/youthcouncil2013/training2013');
var studytrip2013 = require('./routes/youthcouncil2013/studytrip2013');
var artCompetition = require('./routes/youthcouncil2013/artCompetition');
var members2013 = require('./routes/youthcouncil2013/members2013');
var newspapers = require('./routes/youthcouncil2013/newspapers');
// teams routes
var erriadhTeam  =  require('./routes/teams/erriadhTeam');
var hsTeam  =  require('./routes/teams/hsTeam');
var kkTeam  =  require('./routes/teams/kkTeam');
var kmTeam  =  require('./routes/teams/kmTeam');
var monastirTeam  =  require('./routes/teams/monastirTeam');
var msakenTeam  =  require('./routes/teams/msakenTeam');
var sousseTeam  =  require('./routes/teams/sousseTeam');

var app = express();


// initialization of the language framework
i18n.init({
  saveMissing: true,
  debug: true
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
// youth council 2015
app.use('/localyouthcouncils',routes);
app.use('/projects2015',routes);
app.use('/training2015',routes);
app.use('/studytrip2015',routes);
// youth council 2013
app.use('/localyouthcouncils2013',routes);
app.use('/projects2013',routes);
app.use('/training2013',routes);
app.use('/studytrip2013',routes);
app.use('/newspapers',routes);
app.use('/artCompetition',routes);
app.use('/members2013',routes);
// teams
app.use('/erriadhTeam',routes);
app.use('/hammamsousseTeam',routes);
app.use('/kalaakebiraTeam',routes);
app.use('/ksibetmediouniTeam',routes);
app.use('/monastirTeam',routes);
app.use('/msakenTeam',routes);
app.use('/sousseTeam',routes);

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
