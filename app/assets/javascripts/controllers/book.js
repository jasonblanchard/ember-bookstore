EmberBookstore.BookController = Ember.ObjectController.extend({
  text: '',
  errorText: '',

  actions: {
    createReview: function() {
       var review = this.store.createRecord('review', {
         body: this.get('text'),
         book: this.get('model')
       });

       var controller = this;

       review.save().then(function(review) {
         controller.set('text', '');
         controller.get('model.reviews').addObject(review);
         controller.set('errorText', '');
       }).catch(function() {
         controller.set('errorText', 'Something went wrong...');
       });
    }
  }

});
