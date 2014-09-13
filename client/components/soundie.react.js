/**
 * @jsx React.DOM
 */
var React = require('react/addons');
var IroningJobStore = require('../stores/IroningJobStore');

var soundie = React.createClass({
  componentDidMount: function() {
    IroningJobStore.addChangeListener(this._onStateChange);
  },
  componentWillUnmount: function() {
    IroningJobStore.removeChangeListener(this._onStateChange);
  },
  _onStateChange: function() {
    var audio = this.getDOMNode();
    audio.pause();
    audio.currentTime = 0;
    audio.play();
  },
  render: function() {
    return (
      <audio preload="auto" className="hidden" src="/pop.mp3" />
      );
  }
});

module.exports = soundie;