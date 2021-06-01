const { Sequelize, DataTypes } = require('sequelize')
const db = require('./../database/db')

const Orders = db.define('orders', {
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  total: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
  status_id: {
    type: DataTypes.INT,
    allowNull: false,
  },
  users_id: {
    type: DataTypes.INT,
    allowNull: false,
  },
})

module.exports = Orders
