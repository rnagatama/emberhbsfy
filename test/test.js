var assert = require('assert'),
	fs = require('fs'),
	browserify = require('browserify'),
	concat = require('concat-stream'),
	emberhbsfy = require('../index'),
	b;

it("should bundle app.js and transform ember template", function(done) {
	b = browserify(__dirname + '/app.js');
	b.transform(emberhbsfy);
	b.bundle()
		.pipe(concat(function(data) {
			assert(data.length > 1024);
			assert(data.length < 1024 * 1024);
			done();
		}));
});