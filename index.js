const express = require('express')

// CALLING ROUTES
const userRoutes = require('./routes/userRoute')
const productsRoute = require('./routes/productsRoute')
const orderRoute = require('./routes/orderRoute')

const app = express()

//GLOBAL MIDDLEWARE
app.use(express.json({ limit: '10kb' }))
app.use(express.urlencoded({ extended: true, limit: '10kb' }))

// MOUNTING ROUTES
app.use('/api/v1/users', userRoutes)
app.use('/api/v1/products', productsRoute)
app.use('/api/v1/orders', orderRoute)

module.exports = app
