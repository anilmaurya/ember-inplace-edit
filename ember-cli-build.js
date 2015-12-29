/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Any other options
  });

  /*
  This build file specifes the options for the dummy test app of this
  addon, located in `/tests/dummy`
  This build file does *not* influence how the addon or the app using it
  behave. You most likely want to be modifying `./index.js` or app's build file
  */


  // CSS
  app.import(app.bowerDirectory + '/bootstrap/dist/css/bootstrap.css');

  // Scripts
  app.import(app.bowerDirectory + '/bootstrap/dist/js/bootstrap.js');

  return app.toTree();
};
