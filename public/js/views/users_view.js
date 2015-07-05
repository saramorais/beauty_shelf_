App.Views.Users = Backbone.View.extend({
  el: "#main",

  initialize: function() {

    this.loginTemplate = Handlebars.compile($("#login-template").html());

    this.singleUserTemplate = Handlebars.compile($("#single_user").html());

    this.listenTo(this.collection, "add", this.renderAll);
    this.listenTo(this.collection, "reset", this.renderAll);

    this.renderAll();
  },

  renderOne: function(user) {

    //console.log(user);

    var newUserView = new App.Views.User({ model: user });
    this.$el.append(newUserView.el);
  },

  renderAll: function() {
    //console.log("chegou aqui");

    //console.log(this.collection);

    this.$el.empty();
    this.collection.each(this.renderOne, this);
  },

  renderSingle: function(one) {
    this.$el.empty();
    var newUserView = new App.Views.User({ model: one });
    this.$el.append(newUserView.el);    
  },

  events: {
    "click #see_user": "renderOneUser",
    "click #follow_user": "followUser",
    "click #login_toAccount": "viewProf"
  },

  renderOneUser: function(event, data) {

    this.$el.empty();
    var userId = $(event.currentTarget).attr("data-id");
    //console.log(userId);
    var single = App.users.get(userId);

    // App.singleU = new App.Views.User ({model: single});
    // App.singleU.renderSingleUser();
    var data = single.toJSON();
    var compiledTemplate = this.singleUserTemplate(data);
    this.$el.html(compiledTemplate);

  },

  followUser: function(event, data) {

    var currentId = $("#logged_profile").attr("data-id");
    var toFollowId = $(event.currentTarget).attr("data-id");

    console.log(currentId);
    console.log(toFollowId);

    $.get("/users/current_user").done(function(user) {
      if (user) {

        $.post("/followings", {
        user: currentId,
        follower: toFollowId
        }).done(this.nowWhat);

      } else {
        alert("Please login or create an account");
      }
    });

  },

  nowWhat: function() {
    alert("Following!!! :)");


  },

  logTemplate: function() {
    $("#messages").empty();   
    $("#main").empty();
    this.$el.html(this.loginTemplate());
  },

  viewProf: function() {
    var user = $("#username_login").val();
    var pass = $("#password_login").val();
    App.navigation.viewProfile(user, pass);
  }


});