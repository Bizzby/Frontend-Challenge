/**
 * @jsx React.DOM
 */
var React = require('react');

var IroningJobStore = require('../stores/IroningJobStore');
var JobActionCreators = require('../ActionCreators/JobActionCreators');
var JobTypes = require('../constants/JobTypes');

var headerBar = require('../components/headerBar.react');
var icon = require('../components/icon.react');
var selector = require('../components/bzSelector.react');

var ironingRoute = React.createClass({
  getInitialState: function() {
    return {
      job: IroningJobStore.get()
    };
  },
  _onChange: function() {
    this.setState({
      job: IroningJobStore.get()
    });
  },
  componentDidMount: function() {
    IroningJobStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function() {
    IroningJobStore.removeChangeListener(this._onChange);
  },
  locationClick: function() {
    JobActionCreators.nextLocation(JobTypes.IRONING);
  },
  ironingTypeClick: function() {
    JobActionCreators.nextType(JobTypes.IRONING);
  },
  bizzbyIt: function() {
    alert('BIZZBY!');
  },
  render: function() {

    // TODO: create <input> variant of bzSelector
    // TODO: differentiate between clickable/non-clickable select

    var job = this.state.job;

    return (
      <div className="detailView">
        <p>
          I need some ironing done at <selector onClick={this.locationClick}><icon name="pin"/>{job.location}</selector> in <selector onClick={this.locationClick}><icon name="clock"/>{job.time}</selector> its mainly <selector onClick={this.ironingTypeClick}>{job.ironingType}</selector> <input placeholder={job.description}/>
        </p>
        <div className="callOut">
          <a href="#">What do I get?</a>
        </div>
        <button className="bzBtn" onClick={this.bizzbyIt}>
          Get price &amp; Bizzby it
        </button>
      </div>
    );
  }
});

module.exports = ironingRoute;