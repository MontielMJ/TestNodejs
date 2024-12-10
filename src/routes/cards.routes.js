import { Router } from 'express';
import {insertCard, getCards} from '../controllers/cards.controllers.js';
import { verifyToken } from '../auth.js';


const router = Router()

router.post('/tarjetas', verifyToken, insertCard);

router.get('/tarjetas', verifyToken, getCards);

export default router;