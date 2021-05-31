const { Sequelize, DataTypes } = require('sequelize')
const db = require('./../database/db')

const Products = db.define(
  'products',
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    url_img: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
)

module.exports = Products
