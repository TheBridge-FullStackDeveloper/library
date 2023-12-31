'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
   
    static associate(models) {
      Book.belongsToMany(models.Genre,{
        through:models.GenreBook
      })
    }
  }
  Book.init({
    name: DataTypes.STRING,
    price: DataTypes.FLOAT,
    author: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Book',
  });
  return Book;
};