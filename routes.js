// TODO: require handler components here

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
  // handler: Home
}, {
  pattern: "/cleaning",
  // handler: BlogPost
}, {
  pattern: "/ironing",
  // handler: BlogPost
}];

module.exports = routes;