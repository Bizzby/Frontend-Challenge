/**
 * @jsx React.DOM
 */

var React = require('react');
var Router = require("react-simple-router");

var routes = require('./routes');
var navigation = require('./components/navigation.react');

var App = React.createClass({
  render: function() {

    var router = Router.Component;

    var title = null;

    switch(this.props.path) {
      case "/":
        title = "Home";
        break;
      case "/cleaning":
        title = "Cleaning";
        break;
      case "/ironing":
        title = "Ironing";
        break;
    }

    title = "Bizzby | " + title;

    return (
      <html>
        <head>
          <title>Test</title>
          <link href="/bizzby.css" rel="stylesheet" />
          <script async src="/bundle.js"></script>
          <meta name="viewport" content="width=device-width"/>
          <meta charSet="utf-8"/>
        </head>
        <body>

          <navigation activePath={this.props.path}/>
          <router path={this.props.path} routes={routes} />

        </body>
      </html>
      );
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
}

module.exports = App;