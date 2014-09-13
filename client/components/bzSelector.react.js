/**
 * @jsx React.DOM
 */
var React = require('react/addons');
var cx = React.addons.classSet;
// TODO: This is PERFECT for unit-testing with jest

// TODO: animate width-changing
// http://css-tricks.com/snippets/jquery/animate-heightwidth-to-auto/

// TODO: Add un-clickable variant

var bzSelector = React.createClass({
  propTypes: {
    onClick: React.PropTypes.func.isRequired
  },
  handleClick: function() {
    if (!this.props.disabled) {
      this.props.onClick();
    }
  },
  render: function() {

    var classes = cx({
      "bzSelector": true,
      "is-disabled": this.props.disabled
    });

    return (
      <button className={classes} disabled={this.props.disabled} onClick={this.handleClick}>
        {this.props.children}
      </button>
    );
  }
});

module.exports = bzSelector;