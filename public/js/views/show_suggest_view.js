App.Views.ShowSuggestion = Backbone.View.extend({

  initialize: function() {
    this.suggestTemplate = Handlebars.compile($("#suggested").html());

    this.singleUserTemplate = Handlebars.compile($("#single_user").html());

    this.render();
  },

  render: function() {
    var data = this.model.toJSON();
    var compiledTemplate = this.suggestTemplate(data);
    this.$el.append(compiledTemplate);
  },

  events: {
    "click #see_suggest": "seeSuggest"
  },

  seeSuggest: function(event) {
    $("#messages").empty();

    var userId = $(event.currentTarget).attr("data-id");
    console.log(userId);
    var single = App.users.get(userId);
    

    var data = single.toJSON();
    var compiledTemplate = this.singleUserTemplate(data);
    this.$el.html(compiledTemplate);

    App.usersView.renderSingle(single);
  } 

});