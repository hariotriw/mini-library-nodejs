'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsToMany(models.User, {through: models.Book})
    }
  }
  User.init({
    fullname: DataTypes.STRING,
    id_card: DataTypes.INTEGER,
    type_card: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};