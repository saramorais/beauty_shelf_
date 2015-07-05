var App = {
  Models: {},
  Collections: {},
  Views: {}
  //Login: [],
};

$(function() {

  //NAVIGATION
  App.navigation = new App.Views.Navigation();

  //USERS LIST
  App.user = new App.Models.User;
  App.users = new App.Collections.Users;
  App.usersView = new App.Views.Users({ collection: App.users });
  App.users.fetch();

  //FOLLOWING VIEW
  App.follow = new App.Models.FollowingM;
  App.following = new App.Collections.Following;
  App.followingView = new App.Views.Followings ({ collection: App.following });

  //PRODUCTS LIST
  App.productM = new App.Models.Product;
  App.products = new App.Collections.Products;
  App.producsView = new App.Views.ProductsList ({ collection: App.products });

  //CREATE PROFILE
  App.createProfileView = new App.Views.CreateProfile ({ model: App.user });

  //USERS SUGGESTIONS
  App.suggests = new App.Collections.SuggestCollection;
  App.suggestsView = new App.Views.ShowSuggestions ({ collection: App.suggests });

  //CURRENT USER
  App.currentU = new App.Models.CurrentUser;  
  App.currentUser = new App.Collections.CurrentUser;
  App.currentUserView = new App.Views.CurrentsUsers ({ collection: App.currentUser });

  //MY PRODUCTS LIST
  App.myProductsView = new App.Views.MyProducts ({ collection: App.currentUser });

});













