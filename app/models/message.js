import DS from 'ember-data';

export default DS.Model.extend({
  conversation: DS.belongsTo('conversation'),
  message: DS.attr('string'),
  attachment: DS.attr('string'),
  sentAt: DS.attr('date')
});
