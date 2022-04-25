'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Receipt extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Receipt.belongsTo(models.Book)
      Receipt.belongsTo(models.User)
    }
  }
  Receipt.init({
    book_id: DataTypes.INTEGER,
    borrower_id: DataTypes.INTEGER,
    staff_in_charge: DataTypes.STRING,
    start_borrowing: DataTypes.DATE,
    start_borrowing: DataTypes.DATE,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Receipt',
  });
  return Receipt;
};