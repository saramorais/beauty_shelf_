App.Views.ShowSuggestions = Backbone.View.extend({
  el: "#main",

  initialize: function() {
    this.listenTo(this.collection, "add", this.renderAll);
    this.listenTo(this.collection, "reset", this.renderAll);
    this.renderAll();
  },

  renderOne: function(user) {
    var newUserView = new App.Views.ShowSuggestion({ model: user });
    this.$el.append(newUserView.el);
  },

  renderAll: function() {
    //this.$el.empty();
    this.collection.each(this.renderOne, this);
  }



});