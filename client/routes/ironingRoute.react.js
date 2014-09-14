/**
 * In the flux world, this is a "View Controller".
 * It combines multiple react components, adding business logic. 
 * 
 * TODO: turn this into a mixin, so I can use it on all routes that serve very
 * similar purposes. Not DRY in the current state
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
  descriptionChange: function(text) {
    JobActionCreators.changeDescription(JobTypes.IRONING, text);
  },
  bizzbyIt: function() {
    alert('BIZZBY!');
  },
  whatDoTheyGet: function() {
    alert('Bizzbied');
  },
  render: function() {
    // TODO: differentiate between clickable/non-clickable version

    var job = this.state.job;

    // This is not a particularily pretty way of doing it (having a giant wall
    // of text is not the most declerative thing in the world), but is the best
    // way I can think of right now
    return (
      <div className="detailView detailView--ironing">
        <p>
          I need some ironing done at <bzSelector onClick={this.locationClick}><icon name="pin"/>{job.location}</bzSelector>&nbsp;in&nbsp;<bzSelector disabled="true" onClick={this.locationClick}><icon name="clock"/>{job.time}</bzSelector>&nbsp;its&nbsp;mainly&nbsp;<bzSelector onClick={this.ironingTypeClick}>{job.ironingType}</bzSelector>&nbsp;<bzInput placeholder="+ description" onChange={this.descriptionChange} value={job.description}/>
        </p>
        <div className="callOut">
          <button onClick={this.whatDoTheyGet} >What do I get?</button>
        </div>
        <button className="bzBtn" onClick={this.bizzbyIt}>
          Get price &amp; Bizzby it
        </button>
      </div>
    );
  }
});

module.exports = ironingRoute;