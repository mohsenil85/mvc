var template = require('../views/template-main');
var test_data = require('../model/test-data');

exports.get = function(req, res) {
	var teamlist = test_data.teamlist;
	var strTeam = "",
		i = 0;
	for (i = 0; i < teamlist.count;) {
		strTeam = strTeam + "<li>" + teamlist.teams[i].country + "</li>";
		i = i + 1;
	}
	strTeam = "<ul>" + strTeam + "</ul>";
	res.writeHead(200, {
		'Content-Type': 'text/html'
	});
	res.write(
	template.build("Test webber page on nogdjs", "Hello fellow!", "<p>the teams in group" + teamlist.GroupName + " for euro 2012 are: </p>" + strTeam));
	res.end();
}