/**
 * @jsx React.DOM
 */
var React = require('react');

var icon = require('./icon.react');

var Navigation = React.createClass({
  render: function() {

    // TODO: make this systematic
    var cleaningActive = this.props.path === "/cleaning";
    var ironingActive = this.props.path === "/ironing";

    return (
      <ul className="taskTypeList">
        <li className={cleaningActive ? "taskTypeList-item active":"taskTypeList-item"}>
          <a href="/cleaning">
            <icon name="spray_bottle"/>
            Cleaning
          </a>
        </li>
        <li className={ironingActive ?  "taskTypeList-item active":"taskTypeList-item"}>
          <a href="/ironing">
            <icon name="iron"/>
            Ironing
          </a>
        </li>
      </ul>
      );
  }
});

module.exports = Navigation;