import { Request, Response } from 'express';
import { PlaySessionService } from '../services/PlaySessionService';

const playSessionService = new PlaySessionService();

export const getSessions = async (req: Request, res: Response) => {
    try {
        const sessions = await playSessionService.getAllSessions();
        res.json(sessions);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const createSession = async (req: Request, res: Response) => {
    try {

        const data = req.body;

        if (data.hoursPlayed) {
            data.hoursPlayed = parseFloat(data.hoursPlayed);
        }

        const session = await playSessionService.createSession(data);

        res.json(session);

    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};