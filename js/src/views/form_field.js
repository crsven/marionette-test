(function(LoanApplication, M, B) {

  LoanApplication.views.FormField = M.ItemView.extend({
    "tagName": "li",
    "template": (function() {
      var t;

      t  = '';
      t += '<label for="<%= name %>"><%= label %></label>';
      t += '<input type="text" name="<%= name %>" />';

      return t;
    }())
  });

}(window.LoanApplication, Backbone.Marionette, Backbone));
