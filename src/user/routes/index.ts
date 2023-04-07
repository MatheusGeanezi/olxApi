import { Router } from 'express';
import { getUsers } from '../controller/getUserController';
import { postUser } from '../controller/postUserController';

const router = Router();

router.get('/user', getUsers);
router.post('/user', postUser);

export default router;