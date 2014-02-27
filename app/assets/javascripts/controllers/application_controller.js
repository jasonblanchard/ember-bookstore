EmberBookstore.ApplicationController = Ember.Controller.extend({

  isBooks: function() {
     return this.get('currentRoute') == 'books';
  }.property('currentRoute')

});
