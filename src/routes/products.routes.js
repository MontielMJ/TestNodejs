import { Router } from 'express'
import { createProduct, deleteproduct, getProduct, getProducts, updateProduct } from '../controllers/products.controllers.js'
import { verifyToken } from '../auth.js';



const router = Router()

router.get('/productos',verifyToken, getProducts);

router.get('/productos/:id',verifyToken, getProduct);

router.post('/productos',verifyToken, createProduct);

router.put('/productos/:id',verifyToken, updateProduct);

router.delete('/productos/:id',verifyToken, deleteproduct);

export default router