import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function(controller, params) {

    var conversation = this.get('store').createRecord('conversation', params);

    controller.set('model', conversation);
  }
});
