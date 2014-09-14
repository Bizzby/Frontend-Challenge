/**
 * @jsx React.DOM
 */
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
 * @type {Object}
 */
var router = {
  routes: {
    "/": {
      title: "Home",
      handler: <homeRoute/>
    },
    "/cleaning": {
      title: "Cleaning",
      handler: <cleaningRoute/>
    },
    "/ironing": {
      title: "Ironing",
      handler: <ironingRoute/>
    }
  },
  routePatterns: function() {
    var routeArr = [];
    for (var k in this.routes) {
      routeArr.push(k);
    }
    return routeArr;
  }
};

module.exports = router;