/**
 * @jsx React.DOM
 */
var React = require('react');

var headerBar = require('../components/headerBar.react');

var ironingRoute = React.createClass({
  render: function() {
    return (
      <div className={this.props.className}>
        <headerBar/>
        <div className="detailView">
          <p>I need some ironing done at [location] in [timeframe] its mainly [shirts] [+description]</p>
          <div>
            What do I get?
          </div>
          <button>
            Get price &amp; Bizzby it
          </button>
        </div>
      </div>
    );
  }
});

module.exports = ironingRoute;