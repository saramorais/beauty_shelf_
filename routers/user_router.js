var express = require("express"),
  models = require("../models"),
  bcrypt = require("bcrypt"),
  session = require("express-session"),
  User = models.users,
  Product = models.products,
  Following  = models.following;

var userRouter = express.Router();

userRouter.use(session({
  secret: "topsecret",
  resave: false,
  saveUninitialized: true
}));

var restrictAccess = function(req, res, next) {
  var sessionId = parseInt(req.session.currentUser);
  var reqId = parseInt(req.params.id);

  sessionId === reqId ? next() : res.status(401).send({err: 401, msg: 'não!'});
};

var authenticate = function(req, res, next) {
  res.session.currentUser ? next() : res.status(400).send({err: 400, msg: 'no!'});
};

//--------------
//  LOGIN
//--------------
userRouter.post("/sessions", function(req, res) {
  var loginUsername = req.body.username;
  var loginPassword = req.body.password;
  User
    .findOne({
      where: { username: loginUsername }
    })
    .then(function(user) {
      if (user) {
        var passwordDigest = user.password_digest;
        bcrypt.compare(loginPassword, passwordDigest, function(err, result) {
          if (result) {
            req.session.currentUser = user.id;
            res.send("Correct Password");
          } else {
            res.status(400);
            res.send({
              err: 400,
              msg: "Wrong password..."
            });
          }
        });
      } else {
        res.status(400);
        res.send({
          err: 400,
          msg: "Username does not exist!"
        });
      }
    });
});

//--------------
//  LOGOUT
//--------------
userRouter.delete("/sessions", function(req, res) {
  delete req.session.currentUser;
  res.send({ msg: "Successfully logged out" });
});

//--------------
//GET CURRENT USER
//--------------
userRouter.get("/current_user", function(req, res) {
  var userID = req.session.currentUser;
  User.findOne({
    where: 
    { id: userID },
    include: Product
    })
    .then(function(user) {
      res.send(user);
    });
});

//--------------
//GET ALL USERS
//--------------
userRouter.get("/", function(req, res) {
  User.findAll({ include: Product })
      .then(function(users) {
        res.send(users);
    });
});

//--------------
//CREATE USER
//--------------
// userRouter.post("/", function(req, res) {
//   var username = req.body.username;
//   var password = req.body.password;
//   var email = req.body.email;
//   var name = req.body.name;
//   var about = req.body.about;
//   var location = req.body.location;
//   var website = req.body.website;
//   var user_picture = req.body.user_picture;
//   var skin_tone = req.body.skin_tone;
//   var skin_type = req.body.skin_type;
//   var hair_type = req.body.hair_type;
//   var hair_color = req.body.hair_color;

//   bcrypt.hash(password, 10, function(err, hash) {
//     User
//       .create({
//         username: username,
//         password_digest: hash,
//         name: name,
//         email: email,
//         about: about,
//         location: location,
//         website: website,
//         user_picture: user_picture,
//         skin_tone: skin_tone,
//         skin_type: skin_type,
//         hair_type: hair_type,
//         hair_color: hair_color
//       })
//       .then(function(user) {
//         var passwordDigest = user.password_digest;
//           bcrypt.compare(loginPassword, passwordDigest, function(err, result) {
//             req.session.currentUser = user.id;
//             res.send(user);
//         });
//       });
//       }, function(err) {
//         var errors = err.errors.map(function(error) {
//           return error.path + ' - ' + error.message;
//         });
//         res
//           .status(422)
//           .send(errors);
//     });
// });


//--------------
//CREATE USER
//--------------
userRouter.post("/", function(req, res) {
  var username = req.body.username;
  var password = req.body.password;
  var email = req.body.email;
  var name = req.body.name;
  var about = req.body.about;
  var location = req.body.location;
  var website = req.body.website;
  var user_picture = req.body.user_picture;
  var skin_tone = req.body.skin_tone;
  var skin_type = req.body.skin_type;
  var hair_type = req.body.hair_type;
  var hair_color = req.body.hair_color;

  bcrypt.hash(password, 10, function(err, hash) {
    User
      .create({
        username: username,
        password_digest: hash,
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
      })
      .then(function(user) {
        res.send(user);
      })
      }, function(err) {
        var errors = err.errors.map(function(error) {
          return error.path + ' - ' + error.message;
        });
        res
          .status(422)
          .send(errors);
    });
});


//--------------
//SUGGEST SIMILAR USERS
//--------------
userRouter.get("/suggestions", function(req, res) {
  var skin_tone = req.query.skin_tone;
  var hair_color = req.query.hair_color;

  User.findAll({
    where: {
      skin_tone: skin_tone,
      hair_color: hair_color
    }
  }).then(function(users) {
    res.send(users);
    console.log(users);
  });
});

//--------------
//GET USER BY ID
//--------------
userRouter.get("/:id", authenticate, restrictAccess, function(req, res) {
  User.findOne({
    where: { id: req.params.id },
    include: Product
  })
      .then(function(user) {
        res.send(user);
      });
});

//--------------
//GET PRODUCTS OF SINGLE USER
//--------------
userRouter.get("/:id/products", function(req, res) {
  console.log("Here");
  console.log("User ID:", req.params.id);
  Product
    .findAll({ 
      where: {
        user_id: req.params.id 
      } 
    })
    .then(function(products) {
      res.send(products);
    });
}); //NO NEED!!!!!


//--------------
// DELETE SINGLE USER
//--------------
userRouter.delete("/:id", function(req, res) {
  User
    .findOne({
        where: {id: req.params.id},
      })
       .then(function(user) {
         user
          .destroy()
          .then(function() {
            res.send(user);
          });
       });
});


module.exports = userRouter;