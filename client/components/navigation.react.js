/**
 * @jsx React.DOM
 */
var React = require('react');

var Navigation = React.createClass({
  render: function() {
    return (
      <ul>
        <li>{this.props.activePath}</li>
        <li><a href="/cleaning">cleaning</a></li>
        <li><a href="/ironing">ironing</a></li>
      </ul>
      );
  }
});

module.exports = Navigation;