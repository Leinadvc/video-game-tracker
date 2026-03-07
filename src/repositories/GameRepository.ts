import Game from '../models/Game';

export class GameRepository {

    async findAll() {
        return await Game.findAll();
    }

    async findById(id: number) {
        return await Game.findByPk(id);
    }

    async create(game: any) {
        return await Game.create(game);
    }

    async update(id: number, data: any) {
        const game = await this.findById(id);

        if (game) {
            return await game.update(data);
        }

        return null;
    }
}
