/**
 * @jsx React.DOM
 */
var React = require('react');

var bzInput = React.createClass({
  propTypes: {
    placeholder: React.PropTypes.string,
    onChange: React.PropTypes.func.isRequired
  },
  getInitialState: function() {
    return {
      value: null
    };
  },
  render: function() {
    return (
      <input type="text" placeholder={this.props.placeholder} value={this.state.value} onChange={this.props.onChange}/>
    );
  }
});

module.exports = bzInput;