module.exports = function(grunt) {

 
  grunt.initConfig({
    babel: {
      options: {
        sourceMap: true,
        presets: ['babel-preset-es2015']
      },
      dist: {
        files: {
        'dist/grained.js': 'src/grained.js'
        }      
      },
    },
    watch: {
      scripts: {
        files: 'src/**/*.js',
        tasks: ['babel'],
        options: {
          debounceDelay: 250,
        },
      },
    },
  });
   
  require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks 
}

