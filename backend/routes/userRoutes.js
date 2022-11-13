import express from 'express';
const router = express.Router();

import { registerUser, login, users } from '../controllers/userController.js';

router.post('/register', registerUser);
router.post('/login', login);
router.get('/all', users);

export default router;
