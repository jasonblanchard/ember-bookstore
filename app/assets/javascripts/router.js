// For more information see: http://emberjs.com/guides/routing/

EmberBookstore.Router.reopen({
  // TODO: Namespace the api so we can use this 
  //location: 'history'

});

EmberBookstore.Router.map(function() {
  this.route('index', {path: '/'});
  this.resource('books', function() {
    this.resource('book', {path: '/:book_id'});

    this.resource('reviews');
  });
});
