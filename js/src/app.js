(function(LoanApplication, M, B) {

  var app, layout, router, controller;

  app    = new M.Application(),
  layout = new LoanApplication.views.AppLayout();

  app.addRegions({
    "content": "#main"
  });

  router = new LoanApplication.AppRouter({});

  app.addInitializer(function() {
    this.content.show(layout);
  });

  app.addInitializer(function(options) {
    Backbone.history.start();
  });

  LoanApplication.app = app;

}(window.LoanApplication, Backbone.Marionette, Backbone));
