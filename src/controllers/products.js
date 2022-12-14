import Product from '../models/Products.js';

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({ isDeleted: false });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).send({ msg: error });
  }
};

export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).send({ message: 'Product not found' });
    res.status(200).json(product);
  } catch (error) {
    res.status(500).send({ msg: error });
  }
};

export const addProduct = async (req, res) => {
  const newProduct = new Product(req.body);
  try {
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).send({ msg: error });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, { isDeleted: true });
    if (!product) return res.status(404).send('No product found');
    if (product.isDeleted) return res.status(404).json({ message: 'Product already deleted' });
    res.status(200).json({ message: 'Product deleted' });
  } catch (error) {
    res.status(500).send({ msg: error });
  }
};

export const activateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, { isDeleted: false });
    if (!product) return res.status(404).send('No product found');
    if (!product.isDeleted) return res.status(404).json({ message: 'Product is not deleted' });
    res.status(200).json({ message: 'Product activated' });
  } catch (error) {
    res.status(500).send({ msg: error });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body);
    if (!product) return res.status(404).send('No product found');
    res.status(200).json({ message: 'Product updated' });
  } catch (error) {
    res.status(500).send({ msg: error });
  }
}