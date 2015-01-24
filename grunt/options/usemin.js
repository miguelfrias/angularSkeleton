'use strict';

module.exports = function (grunt) {

  grunt.config('usemin', {
    html: ['<%= grunt.config.dist %>/*.html'],
    options: {
        dirs: [grunt.config.dist]
    }
  });

};