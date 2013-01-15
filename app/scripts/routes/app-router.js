RavenBrowser.Router = Ember.Router.extend({
  root: Ember.Route.extend({
    index: Ember.Route.extend({
      route: '/',

      // You'll likely want to connect a view here.
      connectOutlets: function(router) {
        console.log(RavenBrowser);
        router.get('applicationController').connectOutlet('Application');
      }

      // Layout your routes here...
    })
  })
});

