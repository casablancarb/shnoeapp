import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function(controller) {
    controller.set('model', this.get('store').createRecord('user',{ }))
  },

  actions: {
    continue: function(model) {
      return false;
    }
  }
});
