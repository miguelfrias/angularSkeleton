'use strict';

module.exports = function (grunt) {

  grunt.config('copy', {
    dist: {
      files: [{
        expand: true,
        dot: true,
        cwd: '<%= grunt.config.app %>',
        dest: '<%= grunt.config.dist %>',
        src: [
          'index.html',
          'resources/{,**/**/**}*',
          'styles/css/*',
          'scripts/{,**/**}*.html'
        ]
      }]
    }
  });

};