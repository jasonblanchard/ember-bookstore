EmberBookstore.IndexRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('book');
  },

  setupController: function(controller, model) {
    this.controllerFor('application').set('currentRoute', 'index');
    controller.set('model', model);
  }
});
