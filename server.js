/**
 * Hello, Dear Reader!
 * I wouldn't ordinarily write as many comments as there are within this
 * application, but felt I should explain myself in parts. Especially those
 * where it looks like I'm being an idiot, but (kinda) know what I'm doing.
 */

var React = require('react');
require('node-jsx').install();

var stylus = require('stylus');
var nib = require('nib');
var rupture = require('rupture');
var jeet = require('jeet');

var express = require('express');
var Server = express();
var url = require('url');
var fs = require('fs');

var App = require('./client');
var routes = require('./client/routes');
var port = process.argv[2] || 3000;

Server.use(stylus.middleware({
  src: __dirname + "/public",
  compress: true,
  sourcemap: true,
  compile: function(str, path) {
    return stylus(str)
      .set('filename', path)
      .set('compress', true)
      .use(nib())
      .use(rupture())
      .use(jeet());
  }
}));

Server.use(express.static(__dirname + '/public'));

var routePatterns = routes.map(function(route) {
  return route.pattern;
});

Server.get(routePatterns, function(req, res) {
  var path = url.parse(req.url).path;

  var renderedApp = React.renderComponentToString(App({
    path: path
  }));

  res.send("<!doctype html>" + renderedApp);
});

var server = Server.listen(port, function() {
  console.log('Go hit %s:%d in your browser!',
    server.address().address,
    server.address().port);
});