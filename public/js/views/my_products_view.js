App.Views.MyProducts = Backbone.View.extend({
  el: "#main",

  initialize: function() {
    this.listenTo(this.collection, "add", this.renderAll);
    this.listenTo(this.collection, "reset", this.renderAll);
    this.renderAll();
  },

  renderOne: function(product) {
    //console.log(product);
    
    var newProductView = new App.Views.MyProduct ({ model: product });
    this.$el.append(newProductView.el);
  },

  renderAll: function() {
    //console.log("chegou aqui!");
    //this.$el.empty();
    this.collection.each(this.renderOne, this);
  },

  events: {
    "click #view_product": "viewProduct"
  },

  viewProduct: function() {

    alert("Coming soon...");

  }

});