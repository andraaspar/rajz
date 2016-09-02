module.exports = grunt => {
	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		svgstore: {
			compile: {
				files: {
					'icons.svg': ['tmp/*.svg']
				}
			}
		},
		svgmin: {
			options: {
				plugins: [
					{
						removeViewBox: false
					}, {
						removeUselessStrokeAndFill: false
					}, {
						removeAttrs: {
							attrs: ['xmlns']
						}
					}
				]
			},
			compile: {
				files: [
					{
						expand: true,
						cwd: 'svg',
						src: '*.svg',
						dest: 'tmp'
					}
				]
			}
		}
	});
	grunt.registerTask('default', [
		'svgmin',
		'svgstore',
	]);
};