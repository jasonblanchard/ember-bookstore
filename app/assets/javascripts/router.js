// For more information see: http://emberjs.com/guides/routing/

EmberBookstore.Router.map(function() {
  this.route('index', {path: '/'})
  this.resource('books', {path: 'books'});
});
