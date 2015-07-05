var express = require("express"),
    models  = require("../models"),
    User    = models.users,
    Product = models.products,
    Following  = models.followings;

var followingRouter = express.Router();


followingRouter.post("/", function(req, res) {
  Following.create(req.body)
      .then(function(follower) {
        res.send(follower);
    });
});


followingRouter.get("/", function(req, res) {
  Following.findAll()
      .then(function(users) {
        res.send(users);
    });
});

followingRouter.get("/following", function(req, res) {
  var user = req.query.user;
  var followers = [];
  Following.findAll({
    where: {
      user: user
    }
  })
    .then(function(following) {
      following.forEach(function(follow){
        followers.push(follow.follower)
      })
      User.findAll({
        where: {
          id: {
            in: followers
          }
        }
      }).then(function(user) {
        res.send(user);
      });
    });
});


module.exports = followingRouter;