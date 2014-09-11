var browserify = require('browserify');

module.exports = {
  browserify: function() {
    return browserify("../client")
      .require("react-simple-router")
      .require("react")
      .bundle()
      .pipe(fs.createWriteStream("../public/bundle.js"));
  },
  dist: function() {
    // TODO: browserify then uglify etc.
  }
};