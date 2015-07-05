App.Views.CreateProduct = Backbone.View.extend({
  el: "#main",

  initialize: function() {
    // console.log("wahat;nltn;lkenrt")
    this.addProductsTemplate = Handlebars.compile($("#create_product").html());

    this.viewProductTemplate = Handlebars.compile($("#view_single_product").html()); 

  },


  render: function() {
    // this.$el.empty();
    this.$el.append(this.addProductsTemplate());
  },

  events: {
    "click #save_product": "saveProduct",
    "click #search_product": "searchProduct" 
  },

  saveProduct: function() {
    var userId = $("#current_user_id").data("id"); 
    console.log(userId);   

    var newProduct = ({
      picture: $("#picture").val(),
      product: $("#product").val(),
      brand: $("#brand").val(),
      description: $("#description").val(),
      website: $("#website").val(),  
      rating: $("#rating").val(),
      review: $("#review").val(), 
      user_id: userId
    });

    App.newProd = new App.Models.Product;
    App.newProd.save(newProduct);

    this.renderProduct(newProduct);

  },

  renderProduct: function(newProduct) {
  //o que fazer agora -> render single product template
    console.log(newProduct);
    this.$el.empty();

    // var data = newProduct.toJSON();
    var compiledTemplate = this.viewProductTemplate(newProduct);
    this.$el.append(compiledTemplate);
    // viewProductTemplate


  },

  searchProduct: function() {

    alert("Coming soon... Maybe... One day... Who knows...");


  }

});
