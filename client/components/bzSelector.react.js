/**
 * @jsx React.DOM
 */
var React = require('react/addons');
var cx = React.addons.classSet;

var noop = function() {};

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
   * contents, and that change be animated.
   *
   * To do so we render a dummy component to static markup, append it to the
   * DOM, measure it's width, then set the width of this component to that
   * measurement. We keep the element in the DOM until the component is
   * unmounted.
   * 
   * By default, this component's text does not wrap. After inserting the dummy,
   * we check if it's bigger than it's parent — if it is bigger, we apply the
   * wrap CSS class and try again.
   */
  _dummyContainer: null,
  _isWrapped: false,
  setupDummyElement: function() {
    var dummyClass = "dummyContainer";
    this._dummyContainer = document.createElement('span');
    this._dummyContainer.classList.add(dummyClass);
    document.body.appendChild(this._dummyContainer);
  },
  tearDownDummyElement: function() {
    document.body.removeChild(this._dummyContainer);
    this._dummyContainer = null;
  },
  componentWillReceiveProps: function(newProps) {
    var _this = this;
    var width = _this.getStickyWidth(newProps.children);
    var parentWidth = this.getDOMNode().parentElement.offsetWidth;

    this.setState({
      width: _this.getStickyWidth(newProps.children)
    });
  },
  _renderDummyComponent: function(children) {
    var dummyComponent = React.renderComponentToStaticMarkup(
      <bzSelector isWrapped={this._isWrapped} onClick={noop}>
        {children}
      </bzSelector>
    );
    this._dummyContainer.innerHTML = dummyComponent;
  },
  getStickyWidth: function(children) {
    this._renderDummyComponent(children);
    var newWidth = this._dummyContainer.children[0].offsetWidth;
    var parentWidth = this._dummyContainer.offsetWidth;

    // Before setting the width, check that the width of this component is not
    // greater than it's parent.
    if (newWidth > parentWidth) {
      // If it is greater, then add the wrapped CSS class to the dummy, and
      // re-measure
      this._isWrapped = true;
      this._renderDummyComponent(children);
      newWidth = this._dummyContainer.children[0].offsetWidth - 5;
    } else {
      this._isWrapped = false;
    }

    return newWidth;
  },
  componentDidMount: function() {
    this.setupDummyElement();

    this.setState({
      width: this.getStickyWidth(this.props.children)
    });
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

    var classes = cx({
      "bzSelector": true,
      "bzSelector--wrapped": this._isWrapped || this.props.isWrapped,
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