import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function(controller, model) {
    this.get('store').unloadAll('contact');
    this.retrieveContacts();
    controller.set('model', this.get('store').all('contact'));
  },

  retrieveContacts: function() {
    if(Ember.isPresent(navigator.contacts)) {
      navigator.contacts.find(['*'], Ember.run.bind(this, this.cacheContacts));
    } else {
      this.get('store').createRecord('contact', { name: 'rachid', email: 'rachid@qraft.nl', firstLetter: 'R' });
      this.get('store').createRecord('contact', { name: 'other', email: 'other@qraft.nl', firstLetter: 'R' });
    }
  },

  cacheContacts: function(result) {
    var contacts = new Ember.A([]);
    result.forEach(Ember.run.bind(this, function(contact) {
      if(Ember.isPresent(contact.emails) && Ember.isPresent(contact.name.formatted)) {
        contacts.push(
            this.get('store').createRecord('contact', { name: contact.name.formatted, email: contact.emails[0].value, firstLetter: contact.name.formatted[0].toUpperCase() })
            );
      }
    }));
  }
});
