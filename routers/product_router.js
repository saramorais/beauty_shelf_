var express = require("express"),
    models  = require("../models"),
    User    = models.users,
    Product = models.products,
    Following  = models.following;

var productRouter = express.Router();

productRouter.get("/", function(req, res) {
  Product.findAll()
      .then(function(products) {
        res.send(products);
    });
});

productRouter.post("/", function(req, res) {
  Product.create(req.body)
      .then(function(product) {
        res.send(product);
      }, function(err) {
        var errors = err.errors.map(function(error) {
          return error.path + ' - ' + error.message;
        });
        res
          .status(422)
          .send(errors);
    });
});

productRouter.get("/:id", function(req, res) {
  Product.findOne(req.params.id)
      .then(function(product) {
        res.send(product);
      });
});


module.exports = productRouter;