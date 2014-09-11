/**
 * @jsx React.DOM
 */
var React = require('react');

var Navigation = React.createClass({
  render: function() {

    // TODO: check the active path, different CSS classes depending
    // on if we're home or not

    return (
      <ul>
        <li>{this.props.activePath}</li>
        <li><a href="/">Home</a></li>
        <li><a href="/cleaning">cleaning</a></li>
        <li><a href="/ironing">ironing</a></li>
      </ul>
      );
  }
});

module.exports = Navigation;