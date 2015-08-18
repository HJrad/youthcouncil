var express = require('express');
var router = express.Router();


/* GET members 2013 page. */
router.get('/members2013', function(req, res, next) {
  res.render('members2013', { title: 'Members 2013' });
});

module.exports = router;
