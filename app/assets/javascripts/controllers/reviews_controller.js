EmberBookstore.ReviewsController = Ember.ArrayController.extend({
  reviewCount: function() {
      return this.get('length');
  }.property('length')

});
