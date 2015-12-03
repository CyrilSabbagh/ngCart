// package metadata file for Meteor.js
var packageName = 'cyrilsabbagh:ng-cart';
var where = 'client'; // where to install: 'client' or 'server'. For both, pass nothing.
var version = '1.0.0';
var summary = 'Shopping Cart built for AngularJS';
var gitLink = 'https://github.com/snapjay/ngCart';
var documentationFile = 'README.md';

// Meta-data
Package.describe({
  name: packageName,
  version: version,
  summary: summary,
  git: gitLink,
  documentation: documentationFile
});

Package.onUse(function(api) {
  api.versionsFrom(['METEOR@0.9.0', 'METEOR@1.0']); // Meteor versions

  api.use('angular:angular@1.2.0', where); // Dependencies

  api.addFiles('dist/ngCart.js', where); // Files in use
}); 