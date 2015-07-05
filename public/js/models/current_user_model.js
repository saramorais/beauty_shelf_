App.Models.CurrentUser = Backbone.Model.extend({

  initialize: function() {
    //console.log("User Model Created");
  },

  url: "/users/current_user"

});