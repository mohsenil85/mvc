var template = require('../views/template-main');
exports.get = function(req, res) {
	res.writeHead(404, {
		'Content-Type': 'text/html'
	});
	res.write(
	template.build("404 mf!!!!", "not found biatch!", "<p>get it right.!</p>"));
	res.end();
}