/* GET youthcouncil2013 page. */
exports.youthcouncil2013= function(req, res) {
	res.render('youthcouncil2013', { title: 'Youth Council - Edition 2013' });
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