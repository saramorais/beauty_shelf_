"use strict";
module.exports = {
  up: function(migration, DataTypes, done) {
    migration.createTable("users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      username: {
        type: DataTypes.STRING
      },
      password_digest: {
        type: DataTypes.STRING
      },    
      name: {
        type: DataTypes.STRING
      },
      email: {
        type: DataTypes.STRING
      },
      about: {
        type: DataTypes.TEXT
      },
      location: {
        type: DataTypes.STRING
      },
      website: {
        type: DataTypes.STRING
      },
      user_picture: {
        type: DataTypes.STRING
      },
      skin_tone: {
        type: DataTypes.STRING
      },
      skin_type: {
        type: DataTypes.STRING
      },
      hair_type: {
        type: DataTypes.STRING
      },
      hair_color: {
        type: DataTypes.STRING
      },
      created_at: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updated_at: {
        allowNull: false,
        type: DataTypes.DATE
      }
    }).done(done);
  },
  down: function(migration, DataTypes, done) {
    migration.dropTable("users");
  }
};