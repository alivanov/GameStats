import express from 'express';
import gamesController from './controllers/games';

const router = express.Router();

router.route('/games').get(gamesController.getGameData);

export default router;
