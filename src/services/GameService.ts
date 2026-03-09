import { GameRepository } from '../repositories/GameRepository';

export class GameService {
    private gameRepository: GameRepository;

    constructor() {
        this.gameRepository = new GameRepository();
    }

    async getAllGames() {
        return await this.gameRepository.findAll();
    }

    async createGame(data: any) {
        return await this.gameRepository.create(data);
    }
}
