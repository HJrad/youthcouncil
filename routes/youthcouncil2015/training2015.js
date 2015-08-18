var express = require('express');
var router = express.Router();


/* GET training and workshops 2015 page. */
router.get('/training2015', function(req, res, next) {
  res.render('training2015', { title: 'Training and workshops 2015' });
});

module.exports = router;
