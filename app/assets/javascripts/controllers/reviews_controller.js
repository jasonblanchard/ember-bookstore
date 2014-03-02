EmberBookstore.ReviewsController = Ember.ArrayController.extend({
  
  sortProperties: ['createdAt'],
  sortAscending: false,

  reviewCount: function() {
      return this.get('length');
  }.property('length')

});
