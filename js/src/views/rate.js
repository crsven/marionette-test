(function(LoanApplication, M, B, W) {

  LoanApplication.views.Rate = M.ItemView.extend({
    "tagName": "li",
    "template": (function() {
      var t;

      t = '';
      t += '<p><%= name %></p>';
      t += '<p><%= rate %></p>';

      return t;
    }()),
  });

}(window.LoanApplication, Backbone.Marionette, Backbone, Backbone.Wreqr));
