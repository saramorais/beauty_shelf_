"use strict";
module.exports = function(sequelize, DataTypes) {
  var followings = sequelize.define("followings", {
    user: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "You need to login to be able to follow users. Don't have an account? Signup now! :)"
        }
      }
    },
    follower: {
      type: DataTypes.INTEGER
    }
  }, {
    underscored: true,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return followings;
};