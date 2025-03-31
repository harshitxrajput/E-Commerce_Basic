import express from 'express';
import { createProduct, getProduct, updateProduct, deleteProduct } from '../controllers/product.controller.js';

const productRouter = express.Router();

productRouter.post('/create', createProduct);
productRouter.get('/get', getProduct);
productRouter.put('/update/:id', updateProduct);
productRouter.delete('/delete/:id', deleteProduct);

export default productRouter;