var express = require('express');
var router = express.Router();


/* GET training 2013 page. */
router.get('/training2013', function(req, res, next) {
  res.render('training2013', { title: 'Training and workshops of 2013 ' });
});

module.exports = router;
