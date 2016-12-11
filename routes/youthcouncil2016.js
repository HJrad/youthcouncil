
/* GET youthcouncil2016 study Trip page. */
exports.studyTrip= function(req, res) {
	res.render('youthcouncil2016/studyTrip', { title: 'Youth Council New Edition 2016' });
}

/* GET youthcouncil2016 training page. */
exports.training= function(req, res) {
	res.render('youthcouncil2016/training', { title: 'Youth Council New Edition 2016' });
}

/* GET youthcouncil2016 mini projects page. */
exports.miniProjects= function(req, res) {
	res.render('youthcouncil2016/miniprojects', { title: 'Youth Council New Edition 2016' });
}

/* GET youthcouncil2016 mini projects page. */
exports.description= function(req, res) {
	res.render('youthcouncil2016/description', { title: 'Youth Council New Edition 2016' });
}

/* download the project calendar */
exports.downloadCalendar= function(req, res) {
	res.download('./public/Project-Calendar.pdf');
}
