App.Views.CreateProfile = Backbone.View.extend({
  el: "#main",

  initialize: function() {
    this.createTemplate = Handlebars.compile($("#create_profile").html());

    this.createdProfleTemplate = Handlebars.compile($("#profile_created").html());    

    this.firstProdTemplate = Handlebars.compile($("#my_first_product").html()); 
  },

  render: function() {
    this.$el.empty();
    this.$el.html(this.createTemplate());
  },

  events: {
    "click #save_profile": "createProfile",
    "click #see_suggestions": "seeSuggestions",
    "click #first_product": "newProduct"
  },

  createProfile: function() {
    var newUser = ({
      username: $("#username").val(),
      password: $("#password").val(),
      email: $("#email").val(),
      name: $("#name").val(),
      about: $("#about").val(),
      website: $("#website").val(),
      user_picture: $("#user_picture").val(),
      location: $("#location").val(),
      skin_tone: $("#create_skin_tone").val(),
      skin_type: $("#create_skin_type").val(),
      hair_type: $("#create_hair_type").val(),
      hair_color: $("#create_hair_color").val()
    });

    App.newProfile = new App.Models.User;
    App.newProfile.save(newUser);

    this.seeSuggestions(newUser);

    //App.users.sync();
    // App.navigation.renderSession();
  },

  seeSuggestions: function(newUser) {
    $("#main").empty();
    $("#main").prepend(this.createdProfleTemplate());
    $("#main").prepend(this.firstProdTemplate());

    var skin_tone = newUser.skin_tone;
    var hair_color = newUser.hair_color;

    App.suggests.url = "/users/suggestions?skin_tone=" + skin_tone + "&hair_color=" + hair_color;
    App.suggests.fetch();
  },

  newProduct: function() {
    $("#messages").empty();
    this.$el.empty();
    console.log("clicked");
    App.create = new App.Views.CreateProduct;
    App.create.render();
  }

});

