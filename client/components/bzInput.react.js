/**
 * @jsx React.DOM
 */
var React = require('react');
var bzSelector = require('./bzSelector.react');

var bzInput = React.createClass({
  propTypes: {
    placeholder: React.PropTypes.string,
    onChange: React.PropTypes.func.isRequired
  },
  getInitialState: function() {
    return {
      value: null,
      width: null
    };
  },
  componentWillReceiveProps: function(newProps) {
    this.setStickyWidth(newProps);
  },
  setStickyWidth: function(newProps) {
    var noop = function() {};
    var dummyClass = "off-canvas";
    var body = document.body;

    var value = newProps.value || this.props.placeholder;
    var dummyComponent = React.renderComponentToStaticMarkup(
      <bzSelector onClick={noop}>{value}</bzSelector>
    );

    var node = document.createElement('span');
    node.classList.add(dummyClass);
    node.innerHTML = dummyComponent;
    body.appendChild(node);

    var newWidth = node.offsetWidth;
    this.setState({
      width: newWidth - 15
    });
    body.removeChild(node);
  },
  componentDidMount: function() {
    this.setStickyWidth(this.props.placeholder);
  },
  render: function() {
    var styles = null;

    if (this.state.width) {
     styles = {width: this.state.width + "px"};
    }

    return (
      <input style={styles} className="bzInput" type="text" placeholder={this.props.placeholder} value={this.props.value} onChange={this.props.onChange}/>
    );
  }
});

module.exports = bzInput;