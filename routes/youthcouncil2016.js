
/* GET youthcouncil2015 page. */
exports.youthcouncil2016= function(req, res) {
	res.render('youthcouncil2016', { title: 'Youth Council New Edition 2016' });
}

/* download the project calendar */
exports.downloadCalendar= function(req, res) {
	res.download('./public/Project-Calendar.pdf');
}
