App.Views.MyProduct = Backbone.View.extend({

  initialize: function() {
    this.myProductsTemplate = Handlebars.compile($("#view_my_products_list").html());

    this.render();
  },

  render: function() {
    //console.log(this.model);

    var data = this.model.toJSON();
    var compiledTemplate = this.myProductsTemplate(data);
    this.$el.append(compiledTemplate);
  }

});
