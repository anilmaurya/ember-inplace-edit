eval("//# sourceURL=vendor/ember-cli/loader.js");

;eval("define(\"demo/app\", \n  [\"ember\",\"ember/resolver\",\"ember/load-initializers\",\"demo/config/environment\",\"exports\"],\n  function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    var Resolver = __dependency2__[\"default\"];\n    var loadInitializers = __dependency3__[\"default\"];\n    var config = __dependency4__[\"default\"];\n\n    Ember.MODEL_FACTORY_INJECTIONS = true;\n\n    var App = Ember.Application.extend({\n      modulePrefix: config.modulePrefix,\n      podModulePrefix: config.podModulePrefix,\n      Resolver: Resolver\n    });\n\n    loadInitializers(App, config.modulePrefix);\n\n    __exports__[\"default\"] = App;\n  });//# sourceURL=demo/app.js");

;eval("define(\"demo/components/ember-inplace-edit\", \n  [\"ember-inplace-edit/components/ember-inplace-edit\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var emberInplaceEdit = __dependency1__[\"default\"];\n\n    __exports__[\"default\"] = emberInplaceEdit;\n  });//# sourceURL=demo/components/ember-inplace-edit.js");

;eval("define(\"demo/initializers/export-application-global\", \n  [\"ember\",\"demo/config/environment\",\"exports\"],\n  function(__dependency1__, __dependency2__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    var config = __dependency2__[\"default\"];\n\n    function initialize() {\n      var application = arguments[1] || arguments[0];\n      if (config.exportApplicationGlobal !== false) {\n        var value = config.exportApplicationGlobal;\n        var globalName;\n\n        if (typeof value === \'string\') {\n          globalName = value;\n        } else {\n          globalName = Ember.String.classify(config.modulePrefix);\n        }\n\n        if (!window[globalName]) {\n          window[globalName] = application;\n\n          application.reopen({\n            willDestroy: function(){\n              this._super.apply(this, arguments);\n              delete window[globalName];\n            }\n          });\n        }\n      }\n    };\n    __exports__.initialize = initialize;\n    __exports__[\"default\"] = {\n      name: \'export-application-global\',\n\n      initialize: initialize\n    };\n  });//# sourceURL=demo/initializers/export-application-global.js");

;eval("define(\"demo/router\", \n  [\"ember\",\"demo/config/environment\",\"exports\"],\n  function(__dependency1__, __dependency2__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    var config = __dependency2__[\"default\"];\n\n    var Router = Ember.Router.extend({\n      location: config.locationType\n    });\n\n    Router.map(function() {\n    });\n\n    __exports__[\"default\"] = Router;\n  });//# sourceURL=demo/router.js");

;eval("define(\"demo/templates/application\", \n  [\"ember\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    __exports__[\"default\"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {\n    this.compilerInfo = [4,\'>= 1.0.0\'];\n    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};\n      var buffer = \'\', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;\n\n\n      data.buffer.push(\"<h1 id=\'title\'>Demo of ember-inplace-edit</h1>\\n\\n<h3>1. Simple use case : </h3><p>ember-inplace-edit text=\\\"Sample text\\\" type=\\\"input\\\"</p>\\n<h3>Output:</h3>\\n\");\n      data.buffer.push(escapeExpression((helper = helpers[\'ember-inplace-edit\'] || (depth0 && depth0[\'ember-inplace-edit\']),options={hash:{\n        \'text\': (\"Sample text\"),\n        \'type\': (\"input\")\n      },hashTypes:{\'text\': \"STRING\",\'type\': \"STRING\"},hashContexts:{\'text\': depth0,\'type\': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, \"ember-inplace-edit\", options))));\n      data.buffer.push(\"\\n\");\n      stack1 = helpers._triageMustache.call(depth0, \"outlet\", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:[\"ID\"],data:data});\n      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }\n      data.buffer.push(\"\\n\");\n      return buffer;\n      \n    });\n  });//# sourceURL=demo/templates/application.js");

;eval("define(\"demo/tests/app.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - .\');\n    test(\'app.js should pass jshint\', function() { \n      ok(false, \'app.js should pass jshint.\\napp.js: line 1, col 1, \\\'import\\\' is only available in ES6 (use esnext option).\\napp.js: line 2, col 1, \\\'import\\\' is only available in ES6 (use esnext option).\\napp.js: line 3, col 1, \\\'import\\\' is only available in ES6 (use esnext option).\\napp.js: line 4, col 1, \\\'import\\\' is only available in ES6 (use esnext option).\\napp.js: line 16, col 1, \\\'export\\\' is only available in ES6 (use esnext option).\\n\\n5 errors\'); \n    });\n  });//# sourceURL=demo/tests/app.jshint.js");

;eval("define(\"demo/tests/demo/tests/helpers/resolver.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - demo/tests/helpers\');\n    test(\'demo/tests/helpers/resolver.js should pass jshint\', function() { \n      ok(true, \'demo/tests/helpers/resolver.js should pass jshint.\'); \n    });\n  });//# sourceURL=demo/tests/demo/tests/helpers/resolver.jshint.js");

;eval("define(\"demo/tests/demo/tests/helpers/start-app.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - demo/tests/helpers\');\n    test(\'demo/tests/helpers/start-app.js should pass jshint\', function() { \n      ok(true, \'demo/tests/helpers/start-app.js should pass jshint.\'); \n    });\n  });//# sourceURL=demo/tests/demo/tests/helpers/start-app.jshint.js");

;eval("define(\"demo/tests/demo/tests/test-helper.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - demo/tests\');\n    test(\'demo/tests/test-helper.js should pass jshint\', function() { \n      ok(true, \'demo/tests/test-helper.js should pass jshint.\'); \n    });\n  });//# sourceURL=demo/tests/demo/tests/test-helper.jshint.js");

;eval("define(\"demo/tests/helpers/resolver\", \n  [\"ember/resolver\",\"demo/config/environment\",\"exports\"],\n  function(__dependency1__, __dependency2__, __exports__) {\n    \"use strict\";\n    var Resolver = __dependency1__[\"default\"];\n    var config = __dependency2__[\"default\"];\n\n    var resolver = Resolver.create();\n\n    resolver.namespace = {\n      modulePrefix: config.modulePrefix,\n      podModulePrefix: config.podModulePrefix\n    };\n\n    __exports__[\"default\"] = resolver;\n  });//# sourceURL=demo/tests/helpers/resolver.js");

;eval("define(\"demo/tests/helpers/start-app\", \n  [\"ember\",\"demo/app\",\"demo/router\",\"demo/config/environment\",\"exports\"],\n  function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    var Application = __dependency2__[\"default\"];\n    var Router = __dependency3__[\"default\"];\n    var config = __dependency4__[\"default\"];\n\n    __exports__[\"default\"] = function startApp(attrs) {\n      var App;\n\n      var attributes = Ember.merge({}, config.APP);\n      attributes = Ember.merge(attributes, attrs); // use defaults, but you can override;\n\n      Router.reopen({\n        location: \'none\'\n      });\n\n      Ember.run(function() {\n        App = Application.create(attributes);\n        App.setupForTesting();\n        App.injectTestHelpers();\n      });\n\n      App.reset(); // this shouldn\'t be needed, i want to be able to \"start an app at a specific URL\"\n\n      return App;\n    }\n  });//# sourceURL=demo/tests/helpers/start-app.js");

;eval("define(\"demo/tests/router.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - .\');\n    test(\'router.js should pass jshint\', function() { \n      ok(false, \'router.js should pass jshint.\\nrouter.js: line 1, col 1, \\\'import\\\' is only available in ES6 (use esnext option).\\nrouter.js: line 2, col 1, \\\'import\\\' is only available in ES6 (use esnext option).\\nrouter.js: line 11, col 1, \\\'export\\\' is only available in ES6 (use esnext option).\\n\\n3 errors\'); \n    });\n  });//# sourceURL=demo/tests/router.jshint.js");

;eval("define(\"demo/tests/test-helper\", \n  [\"demo/tests/helpers/resolver\",\"ember-qunit\"],\n  function(__dependency1__, __dependency2__) {\n    \"use strict\";\n    var resolver = __dependency1__[\"default\"];\n    var setResolver = __dependency2__.setResolver;\n\n    setResolver(resolver);\n\n    document.write(\'<div id=\"ember-testing-container\"><div id=\"ember-testing\"></div></div>\');\n\n    QUnit.config.urlConfig.push({ id: \'nocontainer\', label: \'Hide container\'});\n    var containerVisibility = QUnit.urlParams.nocontainer ? \'hidden\' : \'visible\';\n    document.getElementById(\'ember-testing-container\').style.visibility = containerVisibility;\n  });//# sourceURL=demo/tests/test-helper.js");

/* jshint ignore:start */

define('demo/config/environment', ['ember'], function(Ember) {
  var prefix = 'demo';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */


});

if (runningTests) {
  require('demo/tests/test-helper');
} else {
  require('demo/app')['default'].create({"LOG_ACTIVE_GENERATION":true,"LOG_VIEW_LOOKUPS":true});
}

/* jshint ignore:end */
