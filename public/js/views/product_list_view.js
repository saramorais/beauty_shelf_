App.Views.ProductList = Backbone.View.extend({

  initialize: function() {
    //console.log("Single List Created");

    this.listProdTemplate = Handlebars.compile($("#view_products_list").html());
    this.render();
  },

  render: function() {

    //console.log(this.model);
    
    var data = this.model.toJSON();
    var compiledTemplate = this.listProdTemplate(data);
    this.$el.append(compiledTemplate);
  }

});