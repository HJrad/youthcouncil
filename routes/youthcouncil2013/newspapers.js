var express = require('express');
var router = express.Router();


/* GET Newspapers and guide book page. */
router.get('/newspapers', function(req, res, next) {
  res.render('newspapersGuidebook', { title: 'Newspapers and guide book' });
});

module.exports = router;
