Ember.Handlebars.registerBoundHelper('markdown', function(text) {
  return new Handlebars.SafeString(markdown.toHTML(text));
});
