var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
	console.log("wtf********************");
  res.render('index', { title: 'Youth Council' });
});

module.exports = router;
