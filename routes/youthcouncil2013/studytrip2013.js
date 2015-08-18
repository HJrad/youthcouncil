var express = require('express');
var router = express.Router();


/* GET study trip 2013 page. */
router.get('/studytrip2013', function(req, res, next) {
  res.render('studytrip2013', { title: 'Study trip of 2013' });
});

module.exports = router;
