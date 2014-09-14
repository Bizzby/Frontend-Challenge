/**
 * @jsx React.DOM
 */
var React = require('react');
var debounce = require('debounce');

var bzSelector = require('./bzSelector.react');

var bzInput = React.createClass({
  propTypes: {
    placeholder: React.PropTypes.string,

    /**
     * Debounced call to passed-in callback.
     * @param {String} The new value of the text input
     */
    onChange: React.PropTypes.func.isRequired
  },
  getInitialState: function() {
    return {
      value: null,
      width: null
    };
  },
  getStickyWidth: function(text) {
    var noop = function() {};
    var dummyComponent = React.renderComponentToStaticMarkup(
      <bzSelector onClick={noop}>{text}</bzSelector>
    );
    this._dummyElement.innerHTML = dummyComponent;
    var newWidth = this._dummyElement.offsetWidth;
    return newWidth;
  },
  _dummyElement: null,
  setupDummyElement: function() {
    var dummyClass = "off-canvas";
    this._dummyElement = document.createElement('span');
    this._dummyElement.classList.add(dummyClass);
    document.body.appendChild(this._dummyElement);
  },
  tearDownDummyElement: function() {
    document.body.removeChild(this._dummyElement);
  },
  componentDidMount: function() {
    var _this = this;
    this.setupDummyElement();
    this.setState({
      width: _this.getStickyWidth(_this.props.placeholder)
    });
  },
  componentWillUnmount: function() {
    this.tearDownDummyElement();
  },
  handleChange: function(event) {
    var _this = this;
    var text = event.target.value;

    this.setState({
      value: text,
      width: _this.getStickyWidth(text || _this.props.placeholder)
    }, _this.propogateChange());
  },
  propogateChange: debounce(function() {
    console.log("called");
    this.props.onChange(this.state.value);
  }, 500),
  render: function() {
    var styles = null;

    if (this.state.width) {
     styles = {width: this.state.width + "px"};
    }

    return (
      <input style={styles} className="bzInput" type="text" placeholder={this.props.placeholder} value={this.state.value} onChange={this.handleChange}/>
    );
  }
});

module.exports = bzInput;