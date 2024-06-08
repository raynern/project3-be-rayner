"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.user);
      this.belongsTo(models.category);
    }
  }
  transaction.init(
    {
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "user",
          key: "id",
        },
      },
      date_start: DataTypes.DATE,
      date_end: DataTypes.DATE,
      income_expense: DataTypes.ENUM("income", "expense"),
      amount: DataTypes.DECIMAL(10, 2),
      category_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "category",
          key: "id",
        },
    },
    {
      sequelize,
      modelName: "transaction",
      underscored: true,
    }
  );
  return transaction;
};
