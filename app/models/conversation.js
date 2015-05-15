import DS from 'ember-data';

export default DS.Model.extend({
  messages: DS.hasMany('message', { async: true }),
  user: DS.belongsTo('user'),
  contact_email: DS.attr('string')
});
