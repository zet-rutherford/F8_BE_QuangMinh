"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class File extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      File.belongsTo(models.User, { foreignKey: "user_id" });
    }
  }
  File.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      url: DataTypes.STRING,
      user_id: DataTypes.STRING,
      createdAt,
    },
    {
      sequelize,
      modelName: "File",
    }
  );
  return File;
};
