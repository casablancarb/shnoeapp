import DS from 'ember-data';

export default DS.Model.extend({
  handle: DS.attr('string'),
  emailAddress: DS.attr('string')
});
