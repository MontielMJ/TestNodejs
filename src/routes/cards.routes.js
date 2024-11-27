import { Router } from 'express';
import {insertCard, getCards} from '../controllers/cards.controllers.js';


const router = Router()

router.post('/tarjetas', insertCard);

router.get('/tarjetas', getCards);

export default router;