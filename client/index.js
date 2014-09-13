/**
 * @jsx React.DOM
 */
var React = require('react/addons');

// This is a simple router that supports server-side rendering (none of the
// other available react routing solutions support this easily yet).
// I'm only using the `Router.Navigator` part of the lib, as I couldn't figure
// out how to support animation when using only the `Router.Component`.
var Router = require("react-simple-router");

var routes = require('./routes').routes;
var navigation = require('./components/navigation.react');
var headerBar = require('./components/headerBar.react');
var icon = require('./components/icon.react');

var App = React.createClass({
  render: function() {
    var activeRoute = routes[this.props.path];

    var title = "Bizzby | " + activeRoute.title;
    var handler = activeRoute.handler;

    return (
      <html>
        <head>
          <title>{title}</title>
          <link href="/bizzby.css" rel="stylesheet" />
          <script async src="/bundle.js"></script>
          <meta name="viewport" content="width=device-width"/>
          <meta charSet="utf-8"/>
        </head>
        <body>
          <noscript>
            <h1 className="banner">http://sighjavascript.tumblr.com</h1>
          </noscript>

          <div className="container">
            <headerBar/>
            <navigation path={this.props.path}/>
            <handler/>
          </div>

        </body>
      </html>
      );
  },
  componentDidMount: function() {

    // Async Typekit
    (function(d) {
      var config = {
          kitId: 'aag6ttf',
          scriptTimeout: 3000
        },
        h = d.documentElement,
        t = setTimeout(function() {
          h.className = h.className.replace(/\bwf-loading\b/g, "") + " wf-inactive";
        }, config.scriptTimeout),
        tk = d.createElement("script"),
        f = false,
        s = d.getElementsByTagName("script")[0],
        a;
      h.className += " wf-loading";
      tk.src = '//use.typekit.net/' + config.kitId + '.js';
      tk.async = true;
      tk.onload = tk.onreadystatechange = function() {
        a = this.readyState;
        if (f || a && a != "complete" && a != "loaded") return;
        f = true;
        clearTimeout(t);
        try {
          Typekit.load(config);
        } catch (e) {}
      };
      s.parentNode.insertBefore(tk, s);
    })(document);
  }
});

// If we're in the browser, render the app
if (typeof window !== 'undefined') {
  var app = React.renderComponent(App({
    path: window.location.pathname
  }), document);

  Router.Navigator.onNavigate(function(newPath){
    app.setProps({ path: newPath });
  });

  // Attach react to the window for the chrome plugin to work
  window.React = React;
}

module.exports = App;