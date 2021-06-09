const orderModel = require('../models/orderModel')
const statusModel = require('../models/statusModel')
const dateHelper = require('../helpers/date')

class OrderController {
  static async create(req, res) {
    try {
      const { user_id: userId } = req.body
      const total = 0
      // const date = dateHelper.getDate()
      const date = '2020/22/2 14:15:15'
      const statusAwait = await statusModel.findOne({
        where: { name: 'await' },
      })
      const orderCreated = await orderModel.create({
        users_id: userId,
        status_id: statusAwait.id,
        total,
        date,
      })
      return res
        .status(201)
        .json({ message: `Order N. ${orderCreated.id} created succesfully` })
    } catch (error) {
      return res
        .status(500)
        .json({ message: 'Error when creating a new order' })
    }
  }
}

// ERROR IN TRY CATCH WHEN POST CREATE ORDER

module.exports = OrderController
