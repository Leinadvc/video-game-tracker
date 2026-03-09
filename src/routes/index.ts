import { Router } from 'express';
import { login, register } from '../controllers/AuthController';
import { getGames, createGame } from '../controllers/GameController';
import { getSessions, createSession } from '../controllers/PlaySessionController';
import { authMiddleware } from '../middleware/auth';
import { upload } from '../utils/fileUpload';

const router = Router();

router.post('/login', login);
router.post('/register', register);

// videojuegos
router.get('/games', authMiddleware, getGames);
router.post('/games', authMiddleware, upload.single('cover'), createGame);

// sesiones de juego
router.get('/sessions', authMiddleware, getSessions);
router.post('/sessions', authMiddleware, createSession);

export default router;
