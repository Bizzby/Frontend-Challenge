/**
 * @jsx React.DOM
 */
var React = require('react');
var icons = require('./icons.react');

var icon = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired
  },
  render: function() {
    var icon = icons[this.props.name];
    return (
      <span className="bzIcon">
        {icon}
      </span>
      );
  }
});

module.exports = icon;