import { Router } from 'express';
import { deleteUser, getUserById, getUsers, insertUser, updateUser }  from '../controllers/users.controllers.js';
 
const router = Router()

router.get('/usuarios', getUsers);

router.get('/usuarios/:id', getUserById);

router.post('/usuarios', insertUser);

router.put('/usuarios', updateUser);

router.delete('/usuarios/:id', deleteUser);


export default router