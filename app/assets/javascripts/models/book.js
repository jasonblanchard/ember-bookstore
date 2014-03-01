EmberBookstore.Book = DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  featured: DS.attr('boolean'),
  createdAt: DS.attr('date'),
  reviews: DS.hasMany('review'),
  authors: DS.hasMany('author')
})
