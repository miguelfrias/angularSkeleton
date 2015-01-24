'use strict';

module.exports = function (grunt) {

  grunt.config('compass', {
    dev: {
      options: {
        sassDir: '<%= grunt.config.app %>/styles/scss',
        cssDir: '<%= grunt.config.app %>/styles/css',
        imagesDir: '<%= grunt.config.app %>/resources/images',
        fontsDir: '<%= grunt.config.app %>/resources/fonts',
        environment: 'development', // development, production
        outputStyle: 'expanded', //nested, expanded, compact, compressed.
        noLineComments: true,
        force: true,
        sourcemap: true
      }
    },
    dist: {
      options: {
        sassDir: '<%= grunt.config.app %>/styles/scss',
        cssDir: '<%= grunt.config.app %>/styles/css',
        imagesDir: '<%= grunt.config.app %>/resources/images',
        fontsDir: '<%= grunt.config.app %>/resources/fonts',
        environment: 'development', // development, production
        outputStyle: 'compressed', //nested, expanded, compact, compressed.
        noLineComments: true,
        force: true,
        clean: true,
        sourcemap: true
      }
    }
  });

};