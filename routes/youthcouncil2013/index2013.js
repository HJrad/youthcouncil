var express = require('express');
var router = express.Router();


/* GET workshops 2013 page. */
router.get('/index2013', function(req, res, next) {
  res.render('index2013', { title: 'Youth council 2013' });
});

module.exports = router;
