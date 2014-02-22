EmberBookstore.IndexRoute = Ember.Route.extend({
  model: function() {
    // TODO: Make this 'featured' or new or something
    return this.store.find('book');
  }
});
