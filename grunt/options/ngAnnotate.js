'use strict';

module.exports = function (grunt) {

    grunt.config('ngAnnotate', {

        dist: {
            files: {
                '<%= grunt.config.dist %>/scripts/scripts.min.js': ['<%= grunt.config.dist %>/scripts/scripts.min.js']
            }
        }
    });

};