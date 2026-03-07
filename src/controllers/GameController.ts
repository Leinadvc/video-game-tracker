import { Request, Response } from 'express';
import { GameService } from '../services/GameService';

const gameService = new GameService();

export const getGames = async (req: Request, res: Response) => {
    try {
        const games = await gameService.getAllGames();
        res.json(games);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const createGame = async (req: Request, res: Response) => {
    try {
        const data = req.body;

        // si suben imagen del juego
        if (req.file) {
            data.coverUrl = `/uploads/${req.file.filename}`;
        }

        const game = await gameService.createGame(data);

        res.json(game);

    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};
