const { Sequelize, DataTypes } = require('sequelize')
const db = require('./../database/db')

const Users = db.define(
  'users',
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    adress: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    roles_id: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
    orders_id: {
      type: DataTypes.INTEGER,
      //   foreignKey: true,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
)

module.exports = Users
