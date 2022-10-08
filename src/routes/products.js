import express from 'express';
import {
  getProducts, addProduct, deleteProduct, getProductById,
} from '../controllers/products.js';

const router = express.Router();

router.get('/', getProducts);
router.post('/add', addProduct);
router.delete('/:id', deleteProduct);
router.get('/:id', getProductById);

export default router;
