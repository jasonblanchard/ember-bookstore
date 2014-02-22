EmberBookstore.IndexController = Ember.ArrayController.extend({

  featuredBooks: function() {
     return this.get('model').filterBy('featured');
  }.property('@each.featured')

})
