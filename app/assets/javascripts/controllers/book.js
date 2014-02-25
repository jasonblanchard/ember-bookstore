EmberBookstore.BookController = Ember.ObjectController.extend({

  review: function() {
    return this.store.createRecord('review', {
      book: this.get('model')
    });
  }.property('model'),

  actions: {
    createReview: function() {
       var controller = this;
       this.get('review').save().then(function(review) {
         controller.get('model.reviews').addObject(review);
       });
    }
  },

  isNotReviewed: Ember.computed.alias('review.isNew')

});
