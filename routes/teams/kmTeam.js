var express = require('express');
var router = express.Router();

/* GET Ksibet mediouni team page. */
router.get('/ksibetmediouniteam', function(req, res, next) {
  res.render('ksibetMediouniTeam', { title: 'Ksibet Mediouni Team' });
});

module.exports = router;