App.Views.ProductsList = Backbone.View.extend({
  el: "#main",

  initialize: function() {
    //console.log("Collection Products Created");
    
    this.listenTo(this.collection, "add", this.renderAll);
    this.listenTo(this.collection, "reset", this.renderAll);
    this.renderAll();
  },

  renderOne: function(product) {
    //console.log(product);

    var newProductList = new App.Views.ProductList ({ model: product });

    this.$el.append(newProductList.el);
  },

  
  renderAll: function() {

    this.$el.empty();
    
    this.collection.each(this.renderOne, this);
  }

});
