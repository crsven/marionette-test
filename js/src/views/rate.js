(function(ProsperApplication, M, B, W) {

  ProsperApplication.views.Rate = M.ItemView.extend({
    "tagName": "li",
    "template": (function() {
      var t;

      t = '';
      t += '<p><%= name %></p>';
      t += '<p><%= rate %></p>';

      return t;
    }()),
  });

}(window.ProsperApplication, Backbone.Marionette, Backbone, Backbone.Wreqr));
