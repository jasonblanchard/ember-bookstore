// for more details see: http://emberjs.com/guides/models/defining-models/

EmberBookstore.Review = DS.Model.extend({
  body: DS.attr('string', {defaultValue: ''}),
  book: DS.belongsTo('book'),
  createdAt: DS.attr('date')
});
