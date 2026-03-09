import { Request, Response } from 'express';
import { AuthService } from '../services/AuthService';
import User from '../models/User';

const authService = new AuthService();

export const login = async (req: Request, res: Response) => {
    try {
        const { username, password } = req.body;
        const token = await authService.login(username, password);
        res.json({ token });
    } catch (error: any) {
        res.status(401).json({ message: error.message });
    }
};

export const register = async (req: Request, res: Response) => {
    try {

        const { username, password } = req.body;

        const user = await User.create({
            username,
            password,
            role: 'admin'
        });

        res.json(user);

    } catch (error:any) {

        res.status(500).json({ message: error.message });

    }
};