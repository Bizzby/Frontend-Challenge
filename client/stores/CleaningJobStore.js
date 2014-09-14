/**
 * Would be way cleaner if this and the other stire shared some common methods.
 * Not DRY.
 */
var moment = require('moment');

var merge = require('react/lib/merge');
var AppDispatcher = require('../dispatcher/AppDispatcher');
var ActionTypes = require('../constants/ActionTypes');
var JobTypes = require('../constants/JobTypes');
var Store = require('./Store');

// Private API
var _locations = ["355 Strand", "121 Curtain Road", "1 Infinite Loop"];
var _locationsIndex = 0;

var _CleaningTypes = ["flat", "house", "room"];
var _CleaningTypesIndex = 0;

var _haveProducts = ["I have cleaning products", "I don't have cleaning products"];
var _haveProductsIndex = 0;

var _job = {
  location: "set location",
  time: "no location",
  cleaningType: _CleaningTypes[_CleaningTypesIndex],
  description: null,
  haveProducts: _haveProducts[_haveProductsIndex]
};

function _bumpLocation() {
  if (_locationsIndex < _locations.length - 1) {
    _locationsIndex++;
  } else {
    _locationsIndex = 0;
  }
  _job.location = _locations[_locationsIndex];

  var duration = Math.floor(Math.random()*1000000);
  _job.time = moment.duration(duration).humanize();
}

function _bumpCleaningTypes() {
  if (_CleaningTypesIndex < _CleaningTypes.length - 1) {
    _CleaningTypesIndex++;
  } else {
    _CleaningTypesIndex = 0;
  }
  _job.cleaningType = _CleaningTypes[_CleaningTypesIndex];
}

function _bumpHaveProducts() {
  if (_haveProductsIndex < _haveProducts.length - 1) {
    _haveProductsIndex++;
  } else {
    _haveProductsIndex = 0;
  }
  _job.haveProducts = _haveProducts[_haveProductsIndex];
}

function _setDescription(text) {
  _job.description = text;
}

// Public API
var CleaningJobStore = merge(Store, {
  get: function() {
    return _job;
  }
});

CleaningJobStore.dispatchToken = AppDispatcher.register(function(payload) {
  var action = payload.action;

  // We only care about cleaning-related jobs
  if (action.jobType !== JobTypes.CLEANING) return;

  switch (action.type) {

    case ActionTypes.CHANGE_LOCATION:
      _bumpLocation();
      CleaningJobStore.emitChange();
      break;

    case ActionTypes.CHANGE_TYPE:
      _bumpCleaningTypes();
      CleaningJobStore.emitChange();
      break;

    case ActionTypes.CHANGE_HAVE_PRODUCTS:
      _bumpHaveProducts();
      CleaningJobStore.emitChange();
      break;

    case ActionTypes.CHANGE_DESCRIPTION:
      _setDescription(action.text);
      CleaningJobStore.emitChange();
      break;
  }
});

module.exports = CleaningJobStore;