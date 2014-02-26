EmberBookstore.ReviewsController = Ember.ArrayController.extend({
  
  sortProperties: ['created_at'],
  sortAscending: false,

  reviewCount: function() {
      return this.get('length');
  }.property('length')

});
