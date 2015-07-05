App.Views.CurrentUser = Backbone.View.extend({

  initialize: function() {
    this.currentUserTemplate = Handlebars.compile($("#current_user").html());
    this.render();

    // this.listenTo(this.model, "reset", this.render);
    // this.listenTo(this.collection, "add", this.render); //not working
  },

  render: function() {
    //console.log(this.model);
    var data = this.model.toJSON();
    var compiledTemplate = this.currentUserTemplate(data);
    this.$el.append(compiledTemplate); 
  },

  events: {
    "click #add_products": "addProducts",
    "click #edit_profile": "editProfile"
  },

  addProducts: function() {
    console.log("clicked");

    $("#main").empty();
    App.create = new App.Views.CreateProduct;
    App.create.render();
  },

  editProfile: function() {
    alert("Coming Soon... One day.... Maybe... Who knows...");
  }

});