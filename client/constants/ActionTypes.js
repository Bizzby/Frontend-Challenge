var keyMirror = require('react/lib/keyMirror');

var ActionTypes = keyMirror({
  CHANGE_LOCATION: null,
  CHANGE_TYPE: null,
  CHANGE_HAVE_PRODUCTS: null,
  CHANGE_DESCRIPTION: null
});

module.exports = ActionTypes;