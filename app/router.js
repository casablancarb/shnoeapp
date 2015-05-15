import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.route('users/new', { path: ''});

  this.route('contacts', function() {
    this.route('index');
  });
  this.resource('conversations');
  this.route('conversations', { path: '/conversations/:contact_email' });
});
