/**
 * @jsx React.DOM
 */
var React = require('react');

var headerBar = require('../components/headerBar.react');
var icon = require('../components/icon.react');

// TODO: clean way of defining the `job` string
// - Could actually have a string with special syntax inside?

var selector = React.createClass({
  render: function() {
    return (
      <span className="bzSelector">
        {this.props.children}
      </span>
    );
  }
});

var ironingRoute = React.createClass({
  render: function() {
    return (
      <div className="detailView">
        <p>I need some ironing done at <selector><icon name="pin"/></selector> in <selector><icon name="clock"/>no location</selector> its mainly <selector>shirts</selector> <selector>+ description</selector></p>
        <div className="callOut">
          What do I get?
        </div>
        <button className="bzBtn">
          Get price &amp; Bizzby it
        </button>
      </div>
    );
  }
});

module.exports = ironingRoute;