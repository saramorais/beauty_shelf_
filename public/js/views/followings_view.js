App.Views.Followings = Backbone.View.extend({
  el: "#main",

  initialize: function() {

    this.listenTo(this.collection, "add", this.renderAll);
    this.listenTo(this.collection, "reset", this.renderAll);
    this.renderAll();
  },

  renderOne: function(user) {

    var followingView = new App.Views.Following ({ model: user });
    this.$el.append(followingView.el);
  },

  renderAll: function() {

    this.$el.empty();
    this.collection.each(this.renderOne, this);
  }

});