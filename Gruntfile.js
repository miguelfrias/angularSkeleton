'use strict';

module.exports = function (grunt) {

    // Load task timming plugin
    require('time-grunt')(grunt);

    // Config
    grunt.config.app              = 'app'; // Path to angular project
    grunt.config.ip               = 'localhost'; // IP for open:server
    grunt.config.dist             = 'dist';
    grunt.config.LIVERELOAD_PORT  = 35729;
    grunt.config.SERVER_DEV_PORT  = 9000;
    grunt.config.SERVER_DIST_PORT = 9010;

    // Load all grunt tasks
    require('load-grunt-tasks')(grunt);

    // load defualts tasks and configs
    grunt.loadTasks('grunt');
    grunt.loadTasks('grunt/options');

};
