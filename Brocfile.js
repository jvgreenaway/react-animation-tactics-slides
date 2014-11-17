
var mergeTrees = require('broccoli-merge-trees'),
    filterReact = require('broccoli-react'),
    browserify = require('broccoli-browserify'),
    sass = require('broccoli-sass'),
    jade = require('broccoli-jade'),
    pickFiles = require('broccoli-static-compiler');


// Public

var publicTree = pickFiles('public', {
  srcDir: '/',
  destDir: '/'
});


// JavaScript

var js = filterReact('scripts', {
  extensions: ['js.jsx']
});

js = browserify(js, {
  entries: ['./index.js'],
  outputFile: 'bundle.js'
});



// CSS 

var bourbon = pickFiles('bower_components/bourbon', {
  srcDir: '/dist',
  destDir: 'bourbon'
});

var styles = sass([bourbon, 'styles'], 'screen.sass', 'screen.css');



// Jade

var pages = jade('pages', {filename: 'pages/index'});



// Vendor

var normalize = pickFiles('bower_components/normalize.css', {
  srcDir: '/',
  files: ['normalize.css'],
  destDir: '/vendor'
});

var vendorTree = mergeTrees([normalize]);


// Export 

var tree = mergeTrees([js, styles, vendorTree, pages, publicTree], {overwrite: true});

module.exports = tree;
