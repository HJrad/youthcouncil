
/* GET youthcouncil2015 page. */
exports.youthcouncil2015= function(req, res) {
	res.render('youthcouncil2015', { title: 'Youth Council 2015' });
}

/* download the project calendar */
exports.downloadCalendar= function(req, res) {
	res.download('./public/Project-Calendar.pdf');
}
