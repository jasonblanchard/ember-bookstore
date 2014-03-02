EmberBookstore.BookController = Ember.ObjectController.extend({

  review: function() {
    return this.store.createRecord('review', {
      book: this.get('model'),
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

  isNotReviewed: Ember.computed.alias('review.isNew'),

  authorLine: function() {
    if (this.get('authors.length') > 1) {
      var authors = this.get('authors').map(function(item) {
        return item.get('fullName');
      });
      return authors.join(', ');
    } else if (this.get('authors.length') == 1) {
      return this.get('authors').content[0].get('fullName');
    } else {
      return 'anonymous';
    }
  }.property('book.@each.authors')

});
