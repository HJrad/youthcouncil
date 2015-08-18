var express = require('express');
var router = express.Router();


/* GET projects 2015 page. */
router.get('/projects2015', function(req, res, next) {
  res.render('projects2015', { title: 'Mini Projects 2015' });
});

module.exports = router;
