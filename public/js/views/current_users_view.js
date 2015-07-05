App.Views.CurrentsUsers = Backbone.View.extend({
  el: "#main",

  initialize: function() {
    //this.listenTo(this.model, "reset", this.renderOne);

    this.listenTo(this.collection, "add", this.renderOne);
    this.listenTo(this.collection, "reset", this.renderOne);
    this.renderOne();
  },

  renderOne: function(user) {
    //console.log(user);
    this.$el.empty();    
    var newUserView = new App.Views.CurrentUser ({ model: user });
    this.$el.append(newUserView.el);

    App.navigation.loginTemp(user);
    //console.log(user);
  }

});

