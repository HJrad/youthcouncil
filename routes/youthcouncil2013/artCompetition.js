var express = require('express');
var router = express.Router();


/* GET art competition page. */
router.get('/artCompetition', function(req, res, next) {
  res.render('artCompetition', { title: 'Art Competition' });
});

module.exports = router;
