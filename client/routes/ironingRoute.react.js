/**
 * @jsx React.DOM
 */

var React = require('react');

var headerBar = require('../components/headerBar.react');

var ironingRoute = React.createClass({
  render: function() {
    return (
      <headerBar title="I need some ironing done"/>
    );
  }
});

module.exports = ironingRoute;