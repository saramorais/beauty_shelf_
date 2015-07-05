App.Views.Navigation = Backbone.View.extend({
  el: "#nav",

  initialize: function() {
    //console.log("nav");

    this.renderSession();

    navTemplate = Handlebars.compile($("#navigation").html());

    navLoginTemplate = Handlebars.compile($("#navigation_after_login").html());

    this.loginTemplate = Handlebars.compile($("#login-template").html());
    //this.render();

    this.userTemplate = Handlebars.compile($("#homepage").html());

  },

  events: {
    "click #create": "createAccount",
    "click #login_button": "login",
    "click #see_users": "seeUsers",
    // "click #login_toAccount": "viewProfile",
    "click #see_products": "seeProducts",
    "click #my_profile": "seeMyProfile",
    "click #logout": "logOut",
    "click #see_my_suggestions": "seeMySuggestions",
    "click #see_all_products": "seeAllProducts",
    "click #see_my_products": "seeMyProducts",

    "click #my_followers": "seeMyFollowers",
    "click #me_following": "seeMyFollowing"
  },

  render: function() {
    this.$el.html(this.navTemplate());
  },

  createAccount: function() {
    $("#main").empty();
    App.createProfileView.render();
  },

  seeUsers: function() {
    $("#messages").empty();
    $("#main").empty();
    App.usersView.renderAll();
  },

  login: function() {
    App.usersView.logTemplate();
  },

  viewProfile: function(user, pass) {
    var username = $("#username_login").val();
    var password = $("#password_login").val(); 

    $.post("/users/sessions", {
      username: username,
      password: password
    })
    .done(this.renderCurrent)   
    .fail(function(response) {
      var err = response.responseJSON;
      alert(err.err + ' - ' + err.msg);
    });

    this.renderCurrent();
  },


//TESTAAAARRR --------------------------- NAO FUNCIONA!!!
//LOGIN AFTER SIGNUP

  // loginAfterSignUp: function(username, password) {
  //   console.log(username);
  //   //App.users.fetch({reset: true});

  //   var username = $("#username_login").val();
  //   var password = $("#password_login").val(); 

  //   $.post("/users/sessions", {
  //     username: username,
  //     password: password
  //   })
  //   .done(this.renderCurrent)   
  //   .fail(function(response) {
  //     var err = response.responseJSON;
  //     alert(err.err + ' - ' + err.msg);
  //   });

  //   this.renderSession();
  // },
//---------------------------------------

  renderSession: function() {
    $.get("/users/current_user").done(function(user) {
      if (user) {
        //console.log("tem user");
        $("#nav").html(navLoginTemplate(user));
      } else {
        //console.log("não tem user");
        $("#nav").html(navTemplate());
      }
    }).fail(function(jqXHR) {
      if (jqXHR.status === 404) {
        $("#session").html('Work In Progress');
      }
    }.bind(this));
  },

  renderCurrent: function() {
    $("#messages").empty();   
    //$("#main").empty();
    App.currentUser.fetch();
  },

  loginTemp: function(user) {
    //this.el.empty();
    var userId = $("#current_user_id").data("id");
    var single = App.currentUser.get(userId);
    var data = single.toJSON();
    this.$el.html(navLoginTemplate(data));
  },

  seeProducts: function() {

    $("#main").empty();    
    App.products.fetch({ reset: true });
  },

  seeMyProfile: function() {
    //$("#messages").empty();   
    $("#main").empty();
    App.currentUser.fetch(); 

    var userId = $("#logged_profile").data("id");
    // App.currentUser.fetch(); 
    var single = App.currentUser.get(userId);

    //console.log(single);

    App.viewMyProfile = new App.Views.MyProfile;
    App.viewMyProfile.render(single);
  },

  seeMySuggestions: function() {

    $("#main").empty();

    var skin_tone = $("#skin_t").data("skin");
    var hair_color = $("#hair_c").data("hair");

    App.suggests.url = "/users/suggestions?skin_tone=" + skin_tone + "&hair_color=" + hair_color;

    App.suggests.fetch({ reset: true }); 

  },

  seeAllProducts: function() {

    $("#main").empty();    
    App.products.fetch({ reset: true });    
    
  },

  //SEE MY PRODUCTS
  seeMyProducts: function() {

    $("#main").empty();

    App.myProds = new App.Views.MyProducts({ collection: App.currentUser });
    App.myProds.renderAll();

  },

  logOut: function() {

    this.$el.empty();
    this.$el.html(navTemplate());

    $.ajax({
      url: "/users/sessions",
      method: "DELETE"
    }).done(this.logedOut);
  },

  logedOut: function() {
    App.users.fetch({ reset: true });

  },

  seeMyFollowing: function() {
    
    var userId = $("#logged_profile").data("id");

    $.get("/followings/following", {
      user: userId
    }).done(function(users){

    App.followingView.collection.set(users);

    });
  },

  //COMING SOON
  seeMyFollowers: function() {
    alert("Coming soon...")
  }


});