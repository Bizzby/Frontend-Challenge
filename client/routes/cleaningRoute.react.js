/**
 * @jsx React.DOM
 */
var React = require('react');

var headerBar = require('../components/headerBar.react');

var cleaningRoute = React.createClass({
  render: function() {
    return (
      <headerBar/>
    );
  }
});

module.exports = cleaningRoute;