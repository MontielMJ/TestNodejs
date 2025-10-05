import { Router } from 'express';
import {insertCard, getCards,getCardById} from '../controllers/cards.controllers.js';
import { verifyToken } from '../auth.js';


const router = Router()
// Rutas para las tarjetas
// POST /tarjetas - Insertar una nueva tarjeta
router.post('/tarjetas', verifyToken, insertCard);
// GET /tarjetas - Obtener todas las tarjetas
router.get('/tarjetas', verifyToken, getCards);
// GET /detalle-tarjeta - Obtener una tarjeta por ID
router.get('/detalle-tarjeta/:id', verifyToken, getCardById);
export default router;