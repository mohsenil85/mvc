var template = require('../views/template-main');
var mongo_data = require('../model/mongo-data');

exports.get = function (req, res){
	mongo_data.teamlist("D", function (err, teamlist){
		if(!err){
			var strTeam = "", i = 0;
			for (i = 0; i < teamlist.count;){
				strTeam = strTeam + "<li>" + teamlist.teams[i].country + "</li>";
				i = i + 1;
			}
			strTeam = "<ul>" + strTeam + "</ul>";
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.write(
				template.build("test webbro on nogd nddn js", "Hellow fellow!!","<p> The teams in in group " +
					teamlist.GroupName + "for eor 202020202 ARE::::</p>" + strTeam));
			res.end();
		}
		else{
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.write(
				template.build("aw fuck!","robit error!","<p> ROBOT DETAILS!!!" + err + "</p>"));
			res.end();
		}
	});
}
