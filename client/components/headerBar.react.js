/**
 * @jsx React.DOM
 */
var React = require('react');
var icon = require('./icon.react');

var headerBar = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired
  },
  render: function() {
    return (
        <div className="headerBar">
          <div className="headerBar-backButton">
            <a href="/">
              <icon name="chevron"/>
            </a>
          </div>
          <h1 className="headerBar-title">{this.props.title}</h1>
        </div>
      );
  }
});

module.exports = headerBar;