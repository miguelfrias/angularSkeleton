'use strict';

module.exports = function (grunt) {
  grunt.config('open', {
    server: {
      url: 'http://' + grunt.config.ip + ':<%= connect.options.port %>'
    }
  });
};