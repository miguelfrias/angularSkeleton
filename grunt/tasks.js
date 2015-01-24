'use strict';

module.exports = function (grunt) {

    //
    // Register tasks
    //

    // This is for development purposes, so It will NOT BE the production site
    grunt.registerTask('serve', function () {

        var tasks = [];

        tasks.push(
            'jshint',
            'wiredep',
            'compass:dev',
            'connect:livereload',
            'open:server',
            'watch'
        );

        grunt.task.run(tasks);
    });

    // This will actually generates the files for production site
    grunt.registerTask('build', function () {

        var tasks = [];

        tasks.push(
            'jshint',
            'wiredep',
            'compass:dev',
            'clean',
            'useminPrepare',
            'concat',
            'ngAnnotate',
            'uglify:minify',
            'copy',
            'imagemin',
            'usemin'
        );

        grunt.task.run(tasks);
    });

    grunt.registerTask('default', [
        'serve'
    ]);

};