EmberBookstore.BookController = Ember.ObjectController.extend({

  bookAuthors: function() {
    if ( this.get('authors.length') > 0 ) {
      return this.get('authors');
    } else {
      nullAuthor = this.store.createRecord('author', {
        firstName: 'Anonymous',
        lastName: '',
        book: this.get('model')
      });

      return [nullAuthor];
    }
  }.property('book.@each.authors'),

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

  authorNames: function() {
    return this.get('bookAuthors').map(function(item) {
      return item.get('fullName');
    });
  }.property('bookAuthors')

});
