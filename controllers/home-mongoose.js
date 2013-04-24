var template = require('../views/template-main');
var mongo_data = require('../model/mongoose-data');

exports.get = function(req, res) {
	var strGroup = "D";
	mongo_data.teamlist(strGroup, function(err, teamlist) {
		if (!err) {
			var strTeam = "", i = 0, teamCount = teamlist.length;
			for (i = 0; i < teamCount;) {
				strTeam = strTeam + "<li>" + teamlist[i].country + "</li>";
				i = i + 1;
			}
			strTeam = "<ul>" + strTeam + "</ul>";
			res.writeHead(200, {
				'Content-Type': 'text/html'
			});
			res.write(
			template.build("test webbro on nogd nddn js", "Hellow fellow!!", "<p> The teams in in group " + teamlist + "for eor 202020202 ARE::::</p>" + strTeam));
			res.end();
		} else {
			res.writeHead(200, {
				'Content-Type': 'text/html'
			});
			res.write(
			template.build("aw fuck!", "robit error!", "<p> ROBOT DETAILS!!!" + err + "</p>"));
			res.end();
		}
	});
}