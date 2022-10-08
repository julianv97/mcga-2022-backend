import Product from '../models/Products.js';

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({ isDeleted: false });
    res.status(200).json(products);
  } catch (err) {
    res.status(500).send(err);
  }
};

export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).send({ message: 'Product not found' });
    res.status(200).json(product);
  } catch (err) {
    res.status(500).send(err);
  }
};

export const addProduct = async (req, res) => {
  const newProduct = new Product(req.body);
  try {
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(500).send(err);
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, { isDeleted: true });
    if (!product) return res.status(404).send('No product found');
    if (product.isDeleted) return res.status(404).json({ message: 'Product already deleted' });
    res.status(200).json({ message: 'Product deleted' });
  } catch (err) {
    res.status(500).send(err);
  }
};
