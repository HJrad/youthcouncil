var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Youth Council' });
});

/* redirect to facebook page */
/* GET home page. */
router.get('/facebookpage', function(req, res, next) {
  res.redirect('https://www.facebook.com/youthcounciltunisia');
});


module.exports = router;
