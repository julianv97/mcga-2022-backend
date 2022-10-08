import express from 'express';
import {
  getProducts, addProduct, deleteProduct, getProductById, activateProduct,
} from '../controllers/products.js';

const router = express.Router();

router.get('/', getProducts);
router.get('/:id', getProductById);
router.post('/add', addProduct);
router.delete('/:id', deleteProduct);
router.put('/:id', activateProduct);

export default router;
