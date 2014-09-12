var AppDispatcher = require('../dispatcher/AppDispatcher');
var ActionTypes = require('../constants/ActionTypes');

var JobActionCreators = {
  nextLocation: function(jobType) {
    var action = {
      type: ActionTypes.CHANGE_LOCATION,
      jobType: jobType
    };
    AppDispatcher.handleViewAction(action);
  },
  nextType: function(jobType) {
    var action = {
      type: ActionTypes.CHANGE_TYPE,
      jobType: jobType
    };
    AppDispatcher.handleViewAction(action);
  },
};

module.exports = JobActionCreators;