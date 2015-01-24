'use strict';

module.exports = function (grunt) {
  grunt.config('uglify', {

    options: {
      banner: '// This file was created on <%= grunt.template.today("yyyy-mm-dd") %>. Any change here will be lost.\n\n',
      sourceMap: false,
      mangle: false,
      compress: {
        drop_console: true
      }
    },

    dist: {
      files: {
        '<%= grunt.config.dist %>/scripts/scripts.min.js': ['<%= grunt.config.app %>/scripts/{,**/**/}*.js']
      }
    },

    minify: {
      options: {
        mangle: false,
      },
      files: {
        '<%= grunt.config.dist %>/scripts/scripts.min.js': '<%= grunt.config.dist %>/scripts/scripts.min.js'
      }
    }

  });
};