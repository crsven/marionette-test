(function(ProsperApplication, M, B) {

  var app, layout, router, controller;

  app    = new M.Application(),
  layout = new ProsperApplication.views.AppLayout();

  app.addRegions({
    "content": "#main"
  });

  router = new ProsperApplication.AppRouter({});

  app.addInitializer(function() {
    this.content.show(layout);
  });

  app.addInitializer(function(options) {
    Backbone.history.start();
  });

  ProsperApplication.app = app;

}(window.ProsperApplication, Backbone.Marionette, Backbone));
