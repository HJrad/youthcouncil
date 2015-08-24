var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/youthcouncil2015', function(req, res, next) {
  res.render('youthcouncil2015', { title: 'Youth Council New Edition 2015' });
});

module.exports = router;
