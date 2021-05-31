const dotenv = require('dotenv').config()
const { Sequelize } = require('sequelize')
const db = require('./database/db')
const app = require('./index')

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`SERVER STARTED ON ${PORT}`)
})
