const express = require('express')
const OrderController = require('../controllers/OrderController')

const router = express.Router()

router.route('/').post(OrderController.create)

module.exports = router
