'use strict';

module.exports = function (grunt) {

  var lrSnippet = require('connect-livereload')({ port: grunt.config.LIVERELOAD_PORT }),
      mountFolder = function (connect, dir) {
        return connect.static(require('path').resolve(dir));
      };

  grunt.config('connect', {

    options: {
      port: grunt.config.SERVER_DEV_PORT,
      // Change this to '0.0.0.0' to access the server from outside.
      hostname: '0.0.0.0'
    },

    livereload: {
      options: {
        middleware: function (connect) {
          return [
            lrSnippet,
            mountFolder(connect, grunt.config.app)
          ];
        }
      }
    }

  });
};