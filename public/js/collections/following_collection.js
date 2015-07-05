App.Collections.Following = Backbone.Collection.extend({
  initialize: function() {
    //console.log("Products Collection Created")
  },

  url: "/followings/following",
  
  model: App.Models.FollowingM

});