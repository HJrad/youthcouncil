var express = require('express');
var router = express.Router();


/* GET workshops 2013 page. */
router.get('/projects2013', function(req, res, next) {
  res.render('projects2013', { title: 'Projects 2013' });
});

module.exports = router;
