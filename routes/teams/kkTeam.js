var express = require('express');
var router = express.Router();


/* GET Kalaa kebira team page. */
router.get('/kalaakebirateam', function(req, res, next) {
  res.render('kalaaKebiraTeam', { title: 'Kalaa Kebira Team' });
});

module.exports = router;
