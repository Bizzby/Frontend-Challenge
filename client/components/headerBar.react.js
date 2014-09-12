/**
 * @jsx React.DOM
 */
var React = require('react');
var icon = require('./icon.react');

var headerBar = React.createClass({
  render: function() {
    return (
        <div className="headerBar">
          <a href="/">
            <h2>What do you need?</h2>
          </a>
        </div>
      );
  }
});

module.exports = headerBar;