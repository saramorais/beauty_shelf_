"use strict";
module.exports = {
  up: function(migration, DataTypes, done) {
    migration.createTable("products", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      product: {
        type: DataTypes.STRING
      },
      brand: {
        type: DataTypes.STRING
      },
      description: {
        type: DataTypes.TEXT
      },
      picture: {
        type: DataTypes.STRING
      },
      website: {
        type: DataTypes.STRING
      },
      rating: {
        type: DataTypes.STRING
      },
      review: {
        type: DataTypes.TEXT
      },
      picture_01: {
        type: DataTypes.STRING
      },
      picture_02: {
        type: DataTypes.STRING
      },
      picture_03: {
        type: DataTypes.STRING
      },
      user_id: {
        type: DataTypes.INTEGER
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
    migration.dropTable("products").done(done);
  }
};