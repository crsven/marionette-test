(function(ProsperApplication, M) {

  ProsperApplication.views.AppLayout = Marionette.Layout.extend({
    "className": "content",
    "onRender": function() {
      this.appForm.show(new ProsperApplication.views.FormFields());
      console.log(ProsperApplication.views);
      this.appRates.show(new ProsperApplication.views.Rates());
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

}(window.ProsperApplication, Backbone.Marionette));
