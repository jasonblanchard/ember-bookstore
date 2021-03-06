// http://emberjs.com/guides/models/using-the-store/

EmberBookstore.Store = DS.Store.extend({
  // Override the default adapter with the `DS.ActiveModelAdapter` which
  // is built to work nicely with the ActiveModel::Serializers gem.
  adapter: DS.RESTAdapter,
});

DS.RESTAdapter.reopen({
  namespace: 'api/v1'
});
