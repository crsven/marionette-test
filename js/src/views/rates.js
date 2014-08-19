(function(LoanApplication, M, B, W) {

  LoanApplication.views.Rates = M.CompositeView.extend({
    "initialize": function() {
      this.collection = new B.Collection([]);
      this.listenTo(LoanApplication.app.vent, "rates:received", this._onRatesReceived);
    },
    "itemView": LoanApplication.views.Rate,
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
}(window.LoanApplication, Backbone.Marionette, Backbone, Backbone.Wreqr));
