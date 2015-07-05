App.Collections.SuggestCollection = Backbone.Collection.extend({
  initialize: function() {
    // console.log("collct")
  },

  url: "/users/suggestions",
  
  model: App.Models.User

});
  