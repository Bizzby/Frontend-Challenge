/**
 * @jsx React.DOM
 */
var React = require('react');
var CleaningJobStore = require('../stores/CleaningJobStore');
var JobActionCreators = require('../actionCreators/JobActionCreators');
var JobTypes = require('../constants/JobTypes');

var headerBar = require('../components/headerBar.react');
var icon = require('../components/icon.react');
var bzSelector = require('../components/bzSelector.react');
var bzInput = require('../components/bzInput.react');


var cleaningRoute = React.createClass({
  getInitialState: function() {
    return {
      job: CleaningJobStore.get()
    };
  },
  _onStateChange: function() {
    this.setState({
      job: CleaningJobStore.get()
    });
  },
  componentDidMount: function() {
    CleaningJobStore.addChangeListener(this._onStateChange);
  },
  componentWillUnmount: function() {
    CleaningJobStore.removeChangeListener(this._onStateChange);
  },
  locationClick: function() {
    JobActionCreators.nextLocation(JobTypes.CLEANING);
  },
  haveProductsClick: function() {
    JobActionCreators.nextHaveProducts(JobTypes.CLEANING);
  },
  cleaningTypeClick: function() {
    JobActionCreators.nextType(JobTypes.CLEANING);
  },
  descriptionChange: function(text) {
    JobActionCreators.changeDescription(JobTypes.CLEANING, text);
  },
  bizzbyIt: function() {
    alert('BIZZBY!');
  },
  whatDoTheyGet: function() {
    alert('Bizzbied');
  },
  render: function() {
    var job = this.state.job;

    // This is not a particularily pretty way of doing it (having a giant wall
    // of text is not the most declerative thing in the world), but is the best
    // way I can think of right now
    return (
      <div className="detailView detailView--cleaning">
        <p>
          Clean my <bzSelector onClick={this.cleaningTypeClick}>{job.cleaningType}</bzSelector>&nbsp;<bzInput placeholder="+ description" onChange={this.descriptionChange} value={job.description}/>&nbsp;at&nbsp;<bzSelector onClick={this.locationClick}><icon name="pin"/>{job.location}</bzSelector>&nbsp;in&nbsp;<bzSelector disabled="true" onClick={this.locationClick}><icon name="clock"/>{job.time}</bzSelector>&nbsp;<bzSelector onClick={this.haveProductsClick}>{job.haveProducts}</bzSelector>
        </p>
        <div className="callOut">
          <button onClick={this.whatDoTheyGet}>{"What's included?"}</button>
        </div>
        <button className="bzBtn" onClick={this.bizzbyIt}>
          Continue
        </button>
      </div>
    );
  }
});

module.exports = cleaningRoute;