const dotenv = require('dotenv').config()
const { Sequelize } = require('sequelize')

// DATABASE CONNECTION

const db = new Sequelize(
  process.env.DBNAME,
  process.env.DBUSER,
  process.env.DBPASSWORD,
  {
    host: process.env.HOST,
    dialect: process.env.DIALECT,
  }
)

async function connection() {
  try {
    await db.authenticate()
    console.log('Connection has been established successfully.')
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
}

connection()

module.exports = db
