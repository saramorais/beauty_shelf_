App.Views.User = Backbone.View.extend({

  initialize: function() {
    this.userTemplate = Handlebars.compile($("#homepage").html());

    this.singleUserTemplate = Handlebars.compile($("#single_user").html());

    this.render();
  },

  render: function() {
    var data = this.model.toJSON();
    var compiledTemplate = this.userTemplate(data);
    this.$el.append(compiledTemplate);
  }
  
});