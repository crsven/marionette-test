(function(ProsperApplication, M, B, W) {

  ProsperApplication.views.Rates = M.CompositeView.extend({
    "initialize": function() {
      this.collection = new B.Collection([]);
      this.listenTo(ProsperApplication.app.vent, "rates:received", this._onRatesReceived);
    },
    "itemView": ProsperApplication.views.Rate,
    "itemViewContainer": "ul",
    "template": (function() {
      var t;

      t  = '';
      t += '<ul></ul>';

      return t;
    }()),
    "_onRatesReceived": function(rates) {
      this.collection.reset(rates);
    }
  });
}(window.ProsperApplication, Backbone.Marionette, Backbone, Backbone.Wreqr));
