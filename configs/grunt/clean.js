var grunt = require('grunt');

module.exports = {
  all:            ['index.html', 'assets', 'dist'],

  plugin_scripts: ['dist/js'],

  demo_markup:    ['assets/demo/demo.html'],
  demo_styles:    ['assets/demo/css'],
  demo_scripts:   ['assets/demo/js'],

  page_markup:    ['index.html'],
  page_styles:    ['assets/page/css'],
  page_scripts:   ['assets/page/js'],
  page_favicons:  ['assets/page/favicons']
};