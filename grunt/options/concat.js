'use strict';

module.exports = function (grunt) {
  grunt.config('concat', {
      options: {
          banner: '// This file was created on <%= grunt.template.today("yyyy-mm-dd") %>. Any change here will be lost.\n\n',
          separator: ';'
      },

      dist: {
        files: {
          '<%= grunt.config.dist %>/scripts/scripts.min.js': ['<%= grunt.config.app %>/scripts/{,**/**/}*.js'],
          '<%= grunt.config.dist %>/scripts/scripts.bower.min.js': [
            '<%= grunt.config.app %>/bower_components/angular/angular.min.js',
            '<%= grunt.config.app %>/bower_components/angular-route/angular-route.min.js',
            '<%= grunt.config.app %>/bower_components/angular-resource/angular-resource.min.js',
            '<%= grunt.config.app %>/bower_components/angular-animate/angular-animate.min.js',
            '<%= grunt.config.app %>/bower_components/angular-sanitize/angular-sanitize.min.js',
            '<%= grunt.config.app %>/bower_components/angular-touch/angular-touch.min.js'
          ]
        }
      }
  });
};
