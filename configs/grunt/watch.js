var grunt = require('grunt');

module.exports = {
  page_markup: {
    files: ['<%= assets %>src/markup/**/*.pug'],
    tasks: ['clean:page_markup', 'pug:page']
  },

  page_styles: {
    files: ['<%= assets %>dist/css/*.*'],
    tasks: ['clean:page_styles', 'copy:page_styles']
  },

  page_scripts: {
    files: ['<%= assets %>dist/js/*.*'],
    tasks: ['clean:page_scripts', 'copy:page_scripts']
  },

  page_favicons: {
    files: ['<%= assets %>dist/favicons/*.*'],
    tasks: ['clean:page_favicons', 'copy:page_favicons']
  },

  demo_markup: {
    files: ['src/demo/markup/**/*.html'],
    tasks: ['clean:demo_markup', 'copy:demo_markup']
  },

  demo_styles: {
    files: ['src/demo/styles/**/*.scss'],
    tasks: ['sasslint:demo', 'clean:demo_styles', 'sass:demo']
  },

  demo_scripts: {
    files: ['src/demo/scripts/**/*.js'],
    tasks: ['jshint:demo', 'clean:demo_scripts', 'concat:demo', 'uglify:demo']
  },

  plugin_scripts: {
    files: ['src/plugin/scripts/**/*.js'],
    tasks: ['jshint:plugin', 'clean:plugin_scripts', 'concat:plugin', 'uglify:plugin']
  }
};