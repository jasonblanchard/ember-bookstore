Ember.Handlebars.registerBoundHelper('listStringify', function(items) {
  if (items.length > 1) {
    return items.join(', ');
  } else {
    return items.join();
  }
});
