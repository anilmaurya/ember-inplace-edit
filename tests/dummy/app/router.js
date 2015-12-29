import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('demo-input', {path: '/'});
  this.route('demo-textarea');
  this.route('demo-autoresize');
});

export default Router;
