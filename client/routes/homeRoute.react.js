/**
 * @jsx React.DOM
 */

var React = require('react');

var home = React.createClass({
  render: function() {
    return (
      <div>
        <h1>home</h1>
        <ul>
          <li><a href="/cleaning">cleaning</a></li>
          <li><a href="/ironing">ironing</a></li>
        </ul>
      </div>
    );
  }
});

module.exports = home;