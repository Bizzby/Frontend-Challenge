/**
 * @jsx React.DOM
 */
var React = require('react');

var headerBar = require('../components/headerBar.react');

var ironingRoute = React.createClass({
  componentWillEnter: function() {
    console.log("called");
  },
  render: function() {
    return (
      <div className={this.props.className}>
        <headerBar/>
        <p>I need some ironing done at [location] in [timeframe] its mainly [shirts] [+description]</p>
        <div>
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