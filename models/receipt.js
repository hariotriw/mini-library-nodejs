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
      // Receipt.belongsTo(models.Book, {foreignKey: 'bookId'})
      // Receipt.belongsTo(models.User, {foreignKey: 'borrowerId'})
      Receipt.belongsTo(models.Book)
      Receipt.belongsTo(models.User)
    }
  }
  Receipt.init({
    BookId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER,
    staff_in_charge: DataTypes.STRING,
    start_borrowing: DataTypes.DATE,
    end_borrowing: DataTypes.DATE,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Receipt',
  });
  return Receipt;
};

// "SELECT Receipt.book_id, Receipt.borrower_id, Receipt.staff_in_charge, Receipt.start_borrowing, Receipt.end_borrowing, Receipt.status, Receipt.createdAt, Receipt.updatedAt, Receipt.BookId, Receipt.UserId, Receipt.book_id, Receipt.borrower_id, Book.id AS Book.id, Book.title AS Book.title, Book.alt_title AS Book.alt_title, Book.author AS Book.author, Book.publisher AS Book.publisher, Book.category AS Book.category, Book.bookshelf_code AS Book.bookshelf_code, Book.stock AS Book.stock, Book.createdAt AS Book.createdAt, Book.updatedAt AS Book.updatedAt, User.id AS User.id, User.fullname AS User.fullname, User.id_card AS User.id_card, User.type_card AS User.type_card, User.createdAt AS User.createdAt, User.updatedAt AS User.updatedAt FROM Receipts AS Receipt LEFT OUTER JOIN Books AS Book ON Receipt.Receipt.book_id = Book.id LEFT OUTER JOIN Users AS User ON Receipt.Receipt.borrower_id = User.id;"