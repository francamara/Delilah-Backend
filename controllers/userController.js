const Users = require('./../models/userModel')
const jwt = require('jsonwebtoken')

exports.login = async (req, res) => {
  const email = req.body.email
  const password = req.body.password
  //   const { email, password } = req.body
  if (!email && !password) {
    return res
      .status(401)
      .json({ error: 'Autentication failed, email or password not found' })
  }
  const user = await Users.findOne({ where: { email: email } })
  if (user.password === password) {
    const privateKey = process.env.PRIVATEKEY
    const token = jwt.sign({ id: user.id }, privateKey)
    console.log(token)
    res.send(token)
  }
}

exports.getAllUsers = async (req, res) => {
  const users = await Users.findAll()
  res.status(200).json({ message: 'All users', users })
}

exports.createUser = async (req, res) => {
  const userData = req.body
  console.log(`----------> DEBUG ${userData}`)
  const newUser = await Users.create(userData)
  res.status(200).json({ message: 'User created succesfuly', newUser })
}

exports.modifyUser = async (req, res) => {
  // 1 buscar id usuario
  const userId = req.params.id
  // buscar usuario con id en DB
  const user = await Users.findOne({ where: { id: userId } })
  // si ufuario no existe, terminar proceso
  if (!user) {
    return res.status(404).json({ message: 'User not found' })
  }
  await user.update(req.body)
  res.status(201).json({ message: 'User updated succesfuly' })
}

exports.deleteUser = async (req, res) => {
  const userId = req.params.id
  const user = await Users.findOne({ where: { id: userId } })
  if (!user) {
    return res.status(401).json({ message: 'User not found' })
  }
  await Users.destroy({
    where: {
      id: userId,
    },
  })
  res.status(200).json({ message: 'User deleted succesfuly' })
}
