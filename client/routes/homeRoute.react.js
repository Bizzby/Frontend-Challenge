/**
 * @jsx React.DOM
 */
var React = require('react');

var icon = require('../components/icon.react');
var headerBar = require('../components/headerBar.react');

var home = React.createClass({
  render: function() {
    return (
      <div className={this.props.className}>
        <div className="headerBar">
          <div className="headerBar-backButton">
          </div>
          <h1 className="headerBar-title">Bizzby</h1>
        </div>
        <ul className="taskTypeList">
          <li className="taskTypeList-item">
            <a href="/cleaning">
              <icon name="spray_bottle"/>
              Cleaning
            </a>
          </li>
          <li className="taskTypeList-item">
            <a href="/ironing">
              <icon name="iron"/>
              Ironing
            </a>
          </li>
        </ul>
      </div>
    );
  }
});

module.exports = home;