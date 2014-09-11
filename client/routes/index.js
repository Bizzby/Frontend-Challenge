var homeRoute = require('./homeRoute.react');
var cleaningRoute = require('./cleaningRoute.react');
var ironingRoute = require('./ironingRoute.react');

/**
 * Routes for the app.
 * 
 * Sharing these between client and server makes it simple to use express's
 * static middlware. However, this means we leave the server to do the 404
 * handling, which is not ideal (separate template probably required).
 * 
 * @type {Array}
 */
var routes = [{
  pattern: "/",
  handler: homeRoute
}, {
  pattern: "/cleaning",
  handler: cleaningRoute
}, {
  pattern: "/ironing",
  handler: ironingRoute
}];

module.exports = routes;