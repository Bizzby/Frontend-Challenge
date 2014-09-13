/**
 * In the flux world, this is a "View Controller".
 * It combines multiple react components, adding business logic. 
 * 
 * TODO: turn this into a mixin, so I can use it on all routes that serve very
 * similar purposes.
 * 
 * @jsx React.DOM
 */
var React = require('react');

var IroningJobStore = require('../stores/IroningJobStore');
var JobActionCreators = require('../ActionCreators/JobActionCreators');
var JobTypes = require('../constants/JobTypes');

var headerBar = require('../components/headerBar.react');
var icon = require('../components/icon.react');
var bzSelector = require('../components/bzSelector.react');
var bzInput = require('../components/bzInput.react');

var ironingRoute = React.createClass({
  getInitialState: function() {
    return {
      job: IroningJobStore.get()
    };
  },
  _onStateChange: function() {
    this.setState({
      job: IroningJobStore.get()
    });
  },
  componentDidMount: function() {
    IroningJobStore.addChangeListener(this._onStateChange);
  },
  componentWillUnmount: function() {
    IroningJobStore.removeChangeListener(this._onStateChange);
  },
  locationClick: function() {
    JobActionCreators.nextLocation(JobTypes.IRONING);
  },
  ironingTypeClick: function() {
    JobActionCreators.nextType(JobTypes.IRONING);
  },
  descriptionChange: function(event) {
    var text = event.target.value;
    JobActionCreators.changeDescription(JobTypes.IRONING, text);
  },
  bizzbyIt: function() {
    alert('BIZZBY!');
  },
  render: function() {
    // TODO: differentiate between clickable/non-clickable version

    var job = this.state.job;

    // This is not a particularily pretty way of doing it (having a giant wall
    // of text is not the most declerative thing in the world), but is the best
    // way I can think of right now
    return (
      <div className="detailView">
        <p>
          I need some ironing done at <bzSelector onClick={this.locationClick}><icon name="pin"/>{job.location}</bzSelector> in <bzSelector onClick={this.locationClick}><icon name="clock"/>{job.time}</bzSelector> its mainly <bzSelector onClick={this.ironingTypeClick}>{job.ironingType}</bzSelector> <bzInput placeholder="+ description" onChange={this.descriptionChange}/>
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