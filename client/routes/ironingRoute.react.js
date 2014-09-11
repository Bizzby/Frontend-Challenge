/**
 * @jsx React.DOM
 */

var React = require('react');

var headerBar = require('../components/headerBar.react');

var ironingRoute = React.createClass({
  render: function() {
    return (
      <headerBar/>
    );
  }
});

module.exports = ironingRoute;