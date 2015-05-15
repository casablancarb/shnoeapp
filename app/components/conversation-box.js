import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['view'],
  message: '',
  conversationMessages: function() {
    return this.get('conversation').get('messages');
  }.property('conversation.@each.messages', 'conversation'),

  actions: {
    sendMessage: function() {
      if(this.get('message').length > 0) {
        var message = this.get('conversation').get('store').createRecord('message', { message: this.get('message') });
        this.get('conversation').get('messages').pushObject( message );
        this.set('message', '');
        message.save();
      }
    }
  }


});
