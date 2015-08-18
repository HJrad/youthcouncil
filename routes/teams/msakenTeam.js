var express = require('express');
var router = express.Router();


/* GET msaken team page. */
router.get('/msakenteam', function(req, res, next) {
  res.render('msakenTeam', { title: 'MSaken' });
});

module.exports = router;
