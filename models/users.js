"use strict";
module.exports = function(sequelize, DataTypes) {
  var users = sequelize.define("users", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {msg: "The username must be unique, try a different one... :)"},
      validate: {
        notEmpty: { msg: "Please enter a username" }
      }
    },
    password_digest: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {msg: "Please enter a password"}
      }
    },    
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {msg: "Please enter a name"}
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: {msg: "Please enter a valid email address"},
        notEmpty: {msg: "Please enter email address"}
      }
    },
    about: {
      type: DataTypes.TEXT
    },
    location: {
      type: DataTypes.STRING
    },
    website: {
      type: DataTypes.STRING,
      validate: {
        isUrl: true
      }
    },
    user_picture: {
      type: DataTypes.STRING,
      defaultValue: "http://files.sintunir.org/200000001-4295f448b8/default-user.png"
    },
    skin_tone: {
      type: DataTypes.STRING,
      allowNull: false
    },
    skin_type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    hair_type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    hair_color: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    underscored: true,

    classMethods: {
      associate: function(models) {
        users.hasMany(models.products, {
          foreignKey: "user_id",
          onDelete: "cascade",
          hooks: true
        });
      }
    }
  });
  return users;
};