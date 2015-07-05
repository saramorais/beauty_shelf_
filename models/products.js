"use strict";
module.exports = function(sequelize, DataTypes) {
  var products = sequelize.define("products", {
    product: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: "Please enter the product name" }
      }
    },
    brand: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: "Please enter the brand" }
      }
    },
    description: {
      type: DataTypes.TEXT
    },
    picture: {
      type: DataTypes.STRING,
      defaultValue: "http://eshopdakatia.net/img/p/4/1/4/414-thickbox_default.jpg"
      // allowNull: false,
      // validate: {
      //   notEmpty: { msg: "Please provide at least one picture" }
      // }
    },
    website: {
      type: DataTypes.STRING
    },
    rating: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: "Please enter a rating" }
      }
    },
    review: {
      type: DataTypes.TEXT
    },
    picture_01: {
      type: DataTypes.STRING,
      defaultValue: "http://files.sintunir.org/200000001-4295f448b8/default-user.png"
    },
    picture_02: {
      type: DataTypes.STRING,
      defaultValue: "http://files.sintunir.org/200000001-4295f448b8/default-user.png"
    },
    picture_03: {
      type: DataTypes.STRING,
      defaultValue: "http://files.sintunir.org/200000001-4295f448b8/default-user.png"
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    underscored: true,
    classMethods: {
      associate: function(models) {
        products.belongsTo(models.users, { foreignKey: "user_id" });

      }
    }
  });
  return products;
};