'use strict';

module.exports = function (grunt) {

  grunt.config('jshint', {
    options: {
      jshintrc: '.jshintrc'
    },
    all: [
      // scripts and subfolders
      '<%= grunt.config.app %>/scripts/*.js',
      '<%= grunt.config.app %>/scripts/**/*.js'
    ]
  });

};