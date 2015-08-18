var express = require('express');
var router = express.Router();


/* GET hammam sousse team page. */
router.get('/hammamsousseteam', function(req, res, next) {
  res.render('hammamHousseTeam', { title: 'Hammam Sousse Team' });
});

module.exports = router;
