    var username: $("#username").val();
    var password: $("#password").val();
    var email: $("#email").val();
    var name: $("#name").val();
    var about: $("#about").val();
    var website: $("#website").val();
    var user_picture: $("#user_picture").val();
    var location: $("#location").val();
    var skin_tone: $("#skin_tone").val();
    var skin_type: $("#skin_type").val();
    var hair_type: $("#hair_type").val();
    var hair_color: $("#hair_color").val();
    
    $.post("/users", {
        username: username,
        password: password,
        name: name,
        email: email,
        about: about,
        location: location,
        website: website,
        user_picture: user_picture,
        skin_tone: skin_tone,
        skin_type: skin_type,
        hair_type: hair_type,
        hair_color: hair_color    
    }).done(
          App.createProfileView.seeSuggestions(newUser);
      //App.users.fetch({reset: true});
          console.log(username);
          App.navigation.loginAfterSignUp(username, password);
    ).error(function(response, stuff) {
      var err = response.responseJSON;
      alert(err.err + ' - ' + err.msg);
    });