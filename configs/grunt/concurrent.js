var grunt = require('grunt'),

  // page markup
  pageMarkupTasks = ['pug:page'],

  // demo markup
  demoMarkupTasks = ['clean:demo_markup', 'copy:demo_markup'],

  // demo styles
  demoStylesTasks = ['sass:demo'],

  // demo scripts
  demoScriptsTasks = ['concat:demo', 'uglify:demo'],

  // plugin scripts
  pluginScriptsTasks = ['concat:plugin', 'uglify:plugin'];

module.exports = {
  build: [
    pageMarkupTasks,
    demoMarkupTasks,
    demoStylesTasks,
    demoScriptsTasks,
    pluginScriptsTasks
  ],

  dev: [
    ['copy:page_styles'],
    ['copy:page_scripts'],
    ['copy:page_favicons']
  ],

  prod: [
    'htmlmin:demo'
  ],

  review: [
    'open:build',
    'open:repo',
    'open:prod'
  ]
};