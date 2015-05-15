import Ember from 'ember';
import groupBy from 'ember-group-by';

export default Ember.Controller.extend({
  contactsByFirstLetter: groupBy('model', 'firstLetter'),

  actions: {
    startChat: function(contact) {
      this.transitionToRoute('conversations', contact.get('email'));
      return false;
    }
  }
});
