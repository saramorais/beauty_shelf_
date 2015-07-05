App.Collections.Products = Backbone.Collection.extend({
  initialize: function() {
    //console.log("Products Collection Created")
  },

  url: "/products",
  
  model: App.Models.Product

});