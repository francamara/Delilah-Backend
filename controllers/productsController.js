const Products = require('./../models/productModel')

exports.createProduct = async (req, res) => {
  const productsData = req.body
  const newProduct = await Products.create(productsData)
  res.status(200).json({ message: 'Product created successfully', newProduct })
}

exports.getAllProducts = async (req, res) => {
  const products = await Products.findAll()
  res.status(200).json({ message: 'All Products', products })
}

exports.getProductById = async (req, res) => {
  const productId = +req.params.id
  const product = await Products.findOne({ where: { id: productId } })
  if (!product) {
    return res.status(404).json({ message: 'Product not found' })
  }
  res.status(201).json({ message: 'Product found succesfuly', product })
}

exports.modifyProduct = async (req, res) => {
  const productId = +req.params.id
  const product = await Products.findOne({ where: { id: productId } })
  if (!product) {
    return res.status(404).json({ message: 'Product not found' })
  }
  await product.update(req.body)
  res.status(201).json({ message: 'Product updated succesfuly' })
}

exports.deleteProduct = async (req, res) => {
  const productId = +req.params.id
  const product = await Products.findOne({ where: { id: productId } })
  if (!product) {
    return res.status(404).json({ message: 'Product not found' })
  }
  await product.destroy(req.body)
  res.status(201).json({ message: 'Product deleted succesfuly' })
}
