
/* GET youthcouncil2013 study Trip page. */
exports.studyTrip= function(req, res) {
	res.render('youthcouncil2013/studyTrip', { title: 'Youth Council New Edition 2013' });
}

/* GET youthcouncil2013 training page. */
exports.training= function(req, res) {
	res.render('youthcouncil2013/training', { title: 'Youth Council New Edition 2013' });
}

/* GET youthcouncil2013 mini projects page. */
exports.miniProjects= function(req, res) {
	res.render('youthcouncil2013/miniprojects', { title: 'Youth Council New Edition 2013' });
}

/* GET youthcouncil2013 art Competition page. */
exports.artCompetition= function(req, res) {
	res.render('youthcouncil2013/artCompetition', { title: 'Youth Council New Edition 2013' });
}

/* GET youthcouncil2013 newspaper page. */
exports.newspaper= function(req, res) {
	res.render('youthcouncil2013/newspaper', { title: 'Youth Council New Edition 2013' });
}

/* download the 1st edition of newspaper */
exports.downloadFirstEdition= function(req, res) {
	res.download('./public/newspaper_aout.pdf');
}

/* download the 2nd edition of the newspaper */
exports.downloadSecondEdition= function(req, res) {
	res.download('./public/newspaper_sept.pdf');
}

/* download the 3rd edition of the newspaper */
/*exports.downloadThirdEdition= function(req, res) {
	res.download('./public/newspaper_sept.pdf');
}*/

/* download the guide book */
exports.downloadGuideBook= function(req, res) {
	res.download('./public/guidebook.pdf');
}
