EmberBookstore.BookController = Ember.ObjectController.extend({
  text: '',

  actions: {
    createReview: function() {
       var review = this.store.createRecord('review', {
         body: this.get('body'),
         book: this.get('model')
       });

       var controller = this;

       review.save().then(function(review) {
         controller.set('text', '');
         controller.get('model.reviews').addObject(review);
       });
    }
  }

});
