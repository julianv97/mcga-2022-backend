import express from 'express';

import productsRoutes from './products.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('OK');
});

router.use('/products', productsRoutes);

export default router;
