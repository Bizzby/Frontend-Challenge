/**
 * Hello, Dear Reader!
 * I wouldn't ordinarily write as many comments as there are within this
 * application, but felt I should explain myself in parts. Especially those
 * where it looks like I'm being an idiot, but have specifically decided to make
 * 
 * 
 * @jsx React.DOM
 */



var React = require('react/addons');

// This is a simple router that supports server-side rendering (none of the
// other available react routing solutions support this easily yet).
// I'm only using the `Router.Navigator` part of the lib, as I couldn't figure
// out how to support animation when using only the `Router.Component`.
var Router = require("react-simple-router");
var CSSTransitionGroup = React.addons.CSSTransitionGroup;

var homeRoute = require('./routes/homeRoute.react');
var cleaningRoute = require('./routes/cleaningRoute.react');
var ironingRoute = require('./routes/ironingRoute.react');
var navigation = require('./components/navigation.react');
var icon = require('./components/icon.react');

var App = React.createClass({
  render: function() {

    var title = null;
    var activeRoute = null;
    switch(this.props.path) {
      case "/":
        title = "Home";
        activeRoute = homeRoute;
        break;
      case "/cleaning":
        title = "Cleaning";
        activeRoute = cleaningRoute;
        break;
      case "/ironing":
        title = "Ironing";
        activeRoute = ironingRoute;
        break;
    }

    title = "Bizzby | " + title;

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
            <h1 className="banner">Oh no! You have no javascript enabled...</h1>
          </noscript>

          <CSSTransitionGroup transitionName="page">
            <activeRoute key={this.props.path}/>
          </CSSTransitionGroup>

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