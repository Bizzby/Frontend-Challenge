/**
 * @jsx React.DOM
 */
var React = require('react/addons');
var cx = React.addons.classSet;

var bzSelector = React.createClass({
  propTypes: {
    onClick: React.PropTypes.func.isRequired
  },
  getInitialState: function() {
    return {
      width: null
    };
  },

  /**
   * We want the CSS width of the element to change according to it's
   * contents, and that be animated.
   *
   * To do so we render a dummy component to static markup, append it to the
   * DOM, measure it's width, then set the width of this component to that
   * measurement. We keep the element in the DOM until the component is unmounted
   */
  componentWillReceiveProps: function(newProps) {
    var _this = this;
    var width = _this.getStickyWidth(newProps.children);
    var parentWidth = this.getDOMNode().parentElement.offsetWidth;

    this.setState({
      width: _this.getStickyWidth(newProps.children),
      isWrapped: width > parentWidth ? true:false
    });
  },
  getStickyWidth: function(children) {
    var noop = function() {};
    var dummyComponent = React.renderComponentToStaticMarkup(
      <bzSelector isWrapped={this.props.isWrapped} onClick={noop}>{children}</bzSelector>
    );
    this._dummyElement.innerHTML = dummyComponent;
    var newWidth = this._dummyElement.children[0].offsetWidth;
    return newWidth;
  },
  _dummyElement: null,
  setupDummyElement: function() {
    var dummyClass = "dummyElement";
    this._dummyElement = document.createElement('span');
    this._dummyElement.classList.add(dummyClass);
    document.body.appendChild(this._dummyElement);
  },
  tearDownDummyElement: function() {
    document.body.removeChild(this._dummyElement);
    this._dummyElement = null;
  },
  componentDidMount: function() {
    var width = this.getDOMNode().offsetWidth;
    this.setState({
      width: width
    });
    this.setupDummyElement();
  },
  componentWillUnmount: function() {
    this.tearDownDummyElement();
  },
  handleClick: function(event) {
    var _this = this;

    // Stop iPhone from calling on the click event (we only want the touch)
    event.preventDefault();

    if (!this.props.disabled) {
      this.props.onClick();
    }
  },
  render: function() {
    var styles = null;

    if (this.state.width) {
     styles = {width: this.state.width + "px"};
    }

    // if (this.props.isWrapped)

    var classes = cx({
      "bzSelector": true,
      "bzSelector--wrapped": this.state.isWrapped,
      "is-disabled": this.props.disabled
    });

    return (
      <button className={classes} style={styles} disabled={this.props.disabled} onClick={this.handleClick} onTouchStart={this.handleClick}>
        {this.props.children}
      </button>
    );
  }
});

module.exports = bzSelector;