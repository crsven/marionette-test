(function(LoanApplication, M) {

  LoanApplication.views.AppLayout = Marionette.Layout.extend({
    "className": "content",
    "onRender": function() {
      this.appForm.show(new LoanApplication.views.FormFields());
      console.log(LoanApplication.views);
      this.appRates.show(new LoanApplication.views.Rates());
    },
    "regions": {
      "appForm": "section[data-region='form']",
      "appRates": "section[data-region='rates']"
    },
    "template": (function() {
      var t = '';
      t += '<section data-region="form"></section>';
      t += '<section data-region="rates"></section>';
      return t;
    }()),
  });

}(window.LoanApplication, Backbone.Marionette));
