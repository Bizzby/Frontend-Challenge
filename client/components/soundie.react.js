/**
 * @jsx React.DOM
 */
var React = require('react/addons');
var IroningJobStore = require('../stores/IroningJobStore');
var CleaningJobStore = require('../stores/CleaningJobStore');

// TODO: better way of making the sound play. Typing into the description part
//       should not play the sound!
// TODO: use web audio API instead of plain old <audio> tag. Safari sputters
//       sometimes when using the <audio> tag

var soundie = React.createClass({
  componentDidMount: function() {
    IroningJobStore.addChangeListener(this._onStateChange);
    CleaningJobStore.addChangeListener(this._onStateChange);
  },
  componentWillUnmount: function() {
    IroningJobStore.removeChangeListener(this._onStateChange);
    CleaningJobStore.removeChangeListener(this._onStateChange);
  },
  _onStateChange: function() {
    var audio = this.getDOMNode();
    audio.play();
  },
  render: function() {
    return (
      <audio preload="auto" className="hidden" src="/pop.mp3" />
      );
  }
});

module.exports = soundie;