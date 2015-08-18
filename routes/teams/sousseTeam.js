var express = require('express');
var router = express.Router();


/* GET sousse team page. */
router.get('/sousseteam', function(req, res, next) {
  res.render('sousseTeam', { title: 'Sousse Team' });
});

module.exports = router;
