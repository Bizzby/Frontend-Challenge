/**
 * @jsx React.DOM
 */
var React = require('react');

var headerBar = require('../components/headerBar.react');
var icon = require('../components/icon.react');

var selector = React.createClass({
  render: function() {
    return (
      <span className="selector">
        {this.props.children}
      </span>
    );
  }
});

var ironingRoute = React.createClass({
  render: function() {
    return (
      <div className="detailView">
        <p>I need some ironing done at <selector><icon name="pin"/></selector> in [timeframe] its mainly [shirts] [+description]</p>
        <div className="callOut">
          What do I get?
        </div>
        <button>
          Get price &amp; Bizzby it
        </button>
      </div>
    );
  }
});

module.exports = ironingRoute;