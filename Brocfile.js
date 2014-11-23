/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var options = {
  hinting: false,
  tests: false,
  minifyJS: {
    enabled: false,
  },
  es3Safe: false,
  minifyCSS: {
    enabled: false
  },
  // TODO: delete above in production

  emberCliFontAwesome: { includeFontAwesomeAssets: false }
};

var app = new EmberApp(options);

app.import("bower_components/font-awesome/css/font-awesome.css");
app.import("bower_components/font-awesome/fonts/fontawesome-webfont.eot", { destDir: "fonts" });
app.import("bower_components/font-awesome/fonts/fontawesome-webfont.svg", { destDir: "fonts" });
app.import("bower_components/font-awesome/fonts/fontawesome-webfont.ttf", { destDir: "fonts" });
app.import("bower_components/font-awesome/fonts/fontawesome-webfont.woff", { destDir: "fonts" });
app.import("bower_components/font-awesome/fonts/FontAwesome.otf", { destDir: "fonts" });

app.import('bower_components/normalize.css/normalize.css');
// Leaflet
app.import('bower_components/leaflet-dist/leaflet-src.js');
app.import('bower_components/leaflet-dist/leaflet.css');
app.import('bower_components/ember-leaflet/dist/ember-leaflet.js');
app.import('bower_components/leaflet-plugins/layer/tile/Google.js');
// Leaflet clustering
app.import('bower_components/leaflet.markerclusterer/dist/MarkerCluster.css');
app.import('bower_components/leaflet.markerclusterer/dist/MarkerCluster.Default.css');
app.import('bower_components/leaflet.markerclusterer/dist/leaflet.markercluster.js');

// Use `app.import` to add additional libraries to the generated
// output files.
//
// If you need to use different assets in different
// environments, specify an object as the first parameter. That
// object's keys should be the environment name and the values
// should be the asset to use in that environment.
//
// If the library that you are including contains AMD or ES6
// modules that you would like to import into your application
// please specify an object with the list of modules as keys
// along with the exports of each module as its value.

module.exports = app.toTree();
