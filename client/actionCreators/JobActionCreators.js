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
  nextHaveProducts: function(jobType) {
    var action = {
      type: ActionTypes.CHANGE_HAVE_PRODUCTS,
      jobType: jobType
    };
    AppDispatcher.handleViewAction(action);
  },
  changeDescription: function(jobType, text) {
    var action = {
      type: ActionTypes.CHANGE_DESCRIPTION,
      jobType: jobType,
      text: text
    };
    AppDispatcher.handleViewAction(action);
  },
};

module.exports = JobActionCreators;