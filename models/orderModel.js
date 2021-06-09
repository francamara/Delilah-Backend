const { Sequelize, DataTypes } = require('sequelize')
const db = require('../database/db')
const statusModel = require('./statusModel')
const userModel = require('../models/userModel')

const orderModel = db.define(
  'orders',
  {
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    total: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    status_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    users_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
)

orderModel.belongsTo(statusModel, {
  as: 'status',
  foreignKey: 'status_id',
})

orderModel.belongsTo(userModel, {
  as: 'user',
  foreignKey: 'users_id',
})

module.exports = orderModel
