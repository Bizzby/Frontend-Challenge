/**
 * @jsx React.DOM
 */
var React = require('react');

var JobActionCreators = require('../ActionCreators/JobActionCreators');

// TODO: This is PERFECT for unit-testing with jest

// TODO: animate width-changing
// http://css-tricks.com/snippets/jquery/animate-heightwidth-to-auto/

var bzSelector = React.createClass({
  propTypes: {
    onClick: React.PropTypes.func.isRequired
  },
  handleClick: function() {
    this.props.onClick();
  },
  render: function() {
    return (
      <span className="bzSelector" onClick={this.handleClick}>
        {this.props.children}
      </span>
    );
  }
});

module.exports = bzSelector;