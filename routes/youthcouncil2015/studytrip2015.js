var express = require('express');
var router = express.Router();


/* GET Study trip 2015 page. */
router.get('/studytrip2015', function(req, res, next) {
  res.render('studytrip2015', { title: 'Study trip 2015' });
});

module.exports = router;
