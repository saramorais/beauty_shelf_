//Libraries
var express     = require("express");
var path        = require("path");
var logger      = require("morgan");
var bodyParser  = require("body-parser");
var request     = require("request");

var multer      = require("multer"); //IMAGES UPLOAD - NOT USED!

// var AWS = require("aws-sdk");
// AWS.config.region = "us-east-2";


// var bcrypt = require("bcrypt");
// var session = require("express-session");

userRouter = require("./routers/user_router.js");
productRouter = require("./routers/product_router.js");
followingRouter = require("./routers/following_router.js");

var app = express();

app.use(logger("dev"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/public"));


app.use("/users", userRouter);
app.use("/products", productRouter);
app.use("/followings", followingRouter);

app.listen( process.env.PORT || 3000, function() {
  console.log("Running!");
});

module.exports = app;