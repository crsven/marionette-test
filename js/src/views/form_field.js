(function(ProsperApplication, M, B) {

  ProsperApplication.views.FormField = M.ItemView.extend({
    "tagName": "li",
    "template": (function() {
      var t;

      t  = '';
      t += '<label for="<%= name %>"><%= label %></label>';
      t += '<input type="text" name="<%= name %>" />';

      return t;
    }())
  });

}(window.ProsperApplication, Backbone.Marionette, Backbone));
