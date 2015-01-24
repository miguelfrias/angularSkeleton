'use strict';

module.exports = function (grunt) {

  grunt.config('imagemin', {
    dist: {
      files: [{
        expand: true,
        dot: true,
        cwd: '<%= grunt.config.app %>/resources/images/',
        dest: '<%= grunt.config.dist %>/resources/images',
        src: ['{,**/**/}*.{png,jpg,gif}']
      }]
    }
  });

};