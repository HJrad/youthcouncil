var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/youthcouncil2013', function(req, res, next) {
  res.render('youthcouncil2013', { title: 'Youth Council Edition 2013' });
});

module.exports = router;
