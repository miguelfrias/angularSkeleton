'use strict';

module.exports = function (grunt) {

  grunt.config('wiredep', {
    task: {
      src: [
        '<%= grunt.config.app %>/index.html',
      ]
    }
  });

};