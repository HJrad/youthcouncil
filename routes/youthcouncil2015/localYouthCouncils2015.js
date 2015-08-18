var express = require('express');
var router = express.Router();


/* GET youth council page 2015 page. */
router.get('/localyouthcouncils', function(req, res, next) {
  res.render('youthcouncils', { title: 'Local Youth Councils 2015' });
});

module.exports = router;
