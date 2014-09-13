/**
 * Hello, Dear Reader!
 * I wouldn't ordinarily write as many comments as there are within this
 * application, but wanted to share my thoughts and ideas with you.
 */

var React = require('react');
require('node-jsx').install();

var stylus = require('stylus');
var nib = require('nib');
var rupture = require('rupture');
var jeet = require('jeet');

var express = require('express');
var logger = require('morgan');
var gzip = require('compression');
var Server = express();
var url = require('url');
var fs = require('fs');

var App = require('./client');
var routePatterns = require('./client/routes').routePatterns();
var port = process.argv[2] || 3000;

Server.use(gzip());
Server.use(logger("combined"));

Server.use(stylus.middleware({
  src: __dirname + "/public",
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