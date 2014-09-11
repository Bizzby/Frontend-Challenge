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
          <script src="//use.typekit.net/aag6ttf.js"></script>
          <meta name="viewport" content="width=device-width"/>
          <meta charSet="utf-8"/>
        </head>
        <body>

          <navigation activePath={this.props.path}/>
          <router path={this.props.path} routes={routes} />

        </body>
      </html>
      );
  },
  componentDidMount: function() {
      (function(d) {
        var config = {
          kitId: 'aag6ttf',
          scriptTimeout: 3000
        },
        h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='//use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s);
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
}

module.exports = App;