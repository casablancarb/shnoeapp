import DS from 'ember-data';

export default DS.Model.extend({
  handle: DS.attr('string'),
  phoneNumber: DS.attr('string')
});
