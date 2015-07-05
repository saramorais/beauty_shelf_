App.Views.MyProfile = Backbone.View.extend({
  el: "#main",

  initialize: function() {
    this.myProfileTemplate = Handlebars.compile($("#current_user").html());

  },

  render: function(single) {

    //console.log(single);
    this.$el.empty();

    var data = single.toJSON();
    var compiledTemplate = this.myProfileTemplate(data);
    this.$el.html(compiledTemplate);

  }

});
