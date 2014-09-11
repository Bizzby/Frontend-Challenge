/**
 * @jsx React.DOM
 */
var React = require('react');
var icon = require('./icon.react');

var headerBar = React.createClass({
  render: function() {
    return (
        <div className="headerBar">
          <div className="headerBar-backButton">
            <a href="/">
              <icon name="chevron"/>
            </a>
          </div>
          <h2 className="headerBar-title">What do you need?</h2>
        </div>
      );
  }
});

module.exports = headerBar;