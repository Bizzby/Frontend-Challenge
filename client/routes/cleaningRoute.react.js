/**
 * @jsx React.DOM
 */
var React = require('react');

var headerBar = require('../components/headerBar.react');

var cleaningRoute = React.createClass({
  render: function() {
    return (
      <div>
        <headerBar/>
        <p>Clean my [flat] [+description] at [location] in [timeframe] [I have cleaning products]
        </p>
      </div>
    );
  }
});

module.exports = cleaningRoute;