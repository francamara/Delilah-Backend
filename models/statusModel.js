const { Sequelize, DataTypes } = require('sequelize')
const db = require('../database/db')

const statusModel = db.define(
  'status',
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
)

// statusModel.belongsto()

module.exports = statusModel
