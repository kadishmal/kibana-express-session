module.exports = function (grunt) {
	const package = require('./package.json');

	var deps = Object.keys(package.dependencies || {});

	var files = [
		`${package.name}.js`,
		'LICENSE',
		'package.json',
		'README.md',
	];

	deps.forEach(function (dep) {
		files.push(`node_modules/${dep}/**/*`);
	});

	grunt.initConfig({
		compress: {
			build: {
				options: {
					archive: `build/${package.name}-${package.version}.zip`
				},
				src: files,
				// The directory name within the archive.
				dest: package.name
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-compress');

	grunt.registerTask('build', ['compress']);
	grunt.registerTask('default', ['build']);
};
