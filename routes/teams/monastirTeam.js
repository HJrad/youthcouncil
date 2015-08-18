var express = require('express');
var router = express.Router();


/* GET monastir team page. */
router.get('/monastirteam', function(req, res, next) {
  res.render('monastirTeam', { title: 'Monastir Team' });
});

module.exports = router;
