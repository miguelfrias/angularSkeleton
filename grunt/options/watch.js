'use strict';

module.exports = function (grunt) {

  grunt.config('watch', {
    options: {
      livereload: grunt.config.LIVERELOAD_PORT
    },

    scripts: {
      files: [
        '<%= grunt.config.app %>/scripts/{,**/}*.js',
      ],
      tasks: ['jshint'],
      livereload: true
    },

    css: {
      files: [
        '<%= grunt.config.app %>/styles/scss/{,**/}*.scss',
      ],
      tasks: ['compass:dev'],
      livereload: true,
    },

    html: {
      files: [
        '<%= grunt.config.app %>/index.html',
        '<%= grunt.config.app %>/scripts/*/views/{,**/}*.html',
      ],
      livereload: true
    },

    images: {
      files: [
        '<%= grunt.config.app %>/resources/images/{,**/}*.{png,jpg,jpeg,gif,webp,svg}'
      ],
      livereload: true
    }
  });

};