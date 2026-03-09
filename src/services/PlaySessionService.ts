import { PlaySessionRepository } from '../repositories/PlaySessionRepository';
import { GameRepository } from '../repositories/GameRepository';

export class PlaySessionService {
    private playSessionRepository: PlaySessionRepository;
    private gameRepository: GameRepository;

    constructor() {
        this.playSessionRepository = new PlaySessionRepository();
        this.gameRepository = new GameRepository();
    }

    async getAllSessions() {
        return await this.playSessionRepository.findAll();
    }

    async createSession(data: any) {

        const game = await this.gameRepository.findById(data.gameId);
        if (!game) {
            throw new Error('Game not found');
        }

        return await this.playSessionRepository.create(data);
    }
}
