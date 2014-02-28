EmberBookstore.setupForTesting();
EmberBookstore.injectTestHelpers();


test("Foo always says the truth", function() {
  var foo = true

  equal(foo, true, "foo.truth is no true");
});

test("Root is visible", function() {
  visit("/");
  andThen(function() {
    equal(find('h2#featured-books').text(), "Featured Books", "Found featured books on root");
  });
});

