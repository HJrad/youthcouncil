
/* GET youthcouncil2015 study Trip page. */
exports.studyTrip= function(req, res) {
	res.render('youthcouncil2015/studyTrip', { title: 'Youth Council New Edition 2015' });
}

/* GET youthcouncil2015 training page. */
exports.training= function(req, res) {
	res.render('youthcouncil2015/training', { title: 'Youth Council New Edition 2015' });
}

/* GET youthcouncil2015 mini projects page. */
exports.miniProjects= function(req, res) {
	res.render('youthcouncil2015/miniprojects', { title: 'Youth Council New Edition 2015' });
}


/* download the project calendar */
exports.downloadCalendar= function(req, res) {
	res.download('./public/Project-Calendar.pdf');
}
