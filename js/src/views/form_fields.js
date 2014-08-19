(function(LoanApplication, M, B) {

  LoanApplication.views.FormFields = M.CompositeView.extend({
    "events": {
      "submit": "_onSubmit"
    },
    "initialize": function() {
      this.collection = new B.Collection([{
        "label": "First Name",
        "name": "first_name"
      }, {
        "label": "Last Name",
        "name": "last_name"
      }]);
    },
    "itemView": LoanApplication.views.FormField,
    "itemViewContainer": "#apply-form",
    "template": (function() {
      var t;

      t  = '';
      t += '<form id="apply-form" action="http://localhost:4567/apply" method="post">';
      t += '<input type="submit" value="Submit" />';
      t += '</form>';

      return t;
    }()),
    "_onSubmit": function(e) {
      e.preventDefault();
      var $form = this.$el.find('#apply-form');
      var $fields = $form.find('input[type="text"]');
      var serializedData = _.reduce($fields, function(values, field){
        values[field.name] = field.value;
        return values;
      }, {});
      $.post($form.attr('action'), serializedData)
        .done(function(response){
          LoanApplication.app.vent.trigger('rates:received', response);
        });
    },
  });

}(window.LoanApplication, Backbone.Marionette, Backbone));
