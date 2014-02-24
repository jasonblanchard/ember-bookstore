// for more details see: http://emberjs.com/guides/models/defining-models/

EmberBookstore.Review = DS.Model.extend({
  body: DS.attr('string'),
  book: DS.belongsTo('book')
});
