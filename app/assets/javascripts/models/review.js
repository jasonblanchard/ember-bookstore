// for more details see: http://emberjs.com/guides/models/defining-models/

EmberBookstore.Review = DS.Model.extend({
  body: DS.attr('string'),
  book: DS.belongsTo('book'),
  // TODO: Make this camel case
  created_at: DS.attr('date')
});
