App.Views.Following = Backbone.View.extend({

  initialize: function() {
    
    this.userTemplate = Handlebars.compile($("#homepage").html());
    this.render();
  },

  render: function() {

    var data = this.model.toJSON();
    var compiledTemplate = this.userTemplate(data);
    this.$el.append(compiledTemplate);
  }
  
});