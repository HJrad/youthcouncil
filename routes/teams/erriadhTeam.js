var express = require('express');
var router = express.Router();


/* GET erriadh team page. */
router.get('/erriadhteam', function(req, res, next) {
  res.render('erriadhTeam', { title: 'Erriadh Team' });
});

module.exports = router;
