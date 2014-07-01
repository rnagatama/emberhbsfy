var through = require('through'),
	compiler = require('ember-template-compiler'),
	emberhbsfy, extensions;

extensions = {
	hbs: 1,
	handlebar: 1,
	handlebars: 1
};

emberhbsfy = function(file) {
	if (!extensions[file.split(".").pop()]) { return through(); }

	var data = '';
	return through(
		function(buf) { data += buf; },
		function() {
			var compiled = compiler.precompile(data).toString();
			compiled = 'Ember.Handlebars.template('.concat(compiled, ');');
			compiled = 'module.exports = '.concat(compiled);
			this.queue(compiled);
			this.queue(null);
		}
	);
};

module.exports = emberhbsfy;