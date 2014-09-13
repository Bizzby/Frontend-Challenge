/**
 * @jsx React.DOM
 */
var React = require('react');

// TODO: change width depending on input contents

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
      <input className="bzInput" type="text" placeholder={this.props.placeholder} value={this.state.value} onChange={this.props.onChange}/>
    );
  }
});

module.exports = bzInput;