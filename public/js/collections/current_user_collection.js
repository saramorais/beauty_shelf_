App.Collections.CurrentUser = Backbone.Collection.extend({
  initialize: function() {
    //console.log("Users Collection Created")
  },

  url: "/users/current_user",
  
  model: App.Models.CurrentUser 

});