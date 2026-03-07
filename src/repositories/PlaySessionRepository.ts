import PlaySession from '../models/PlaySession';

export class PlaySessionRepository {

    async findAll() {
        return await PlaySession.findAll();
    }

    async create(session: any) {
        return await PlaySession.create(session);
    }

    async findByGameId(gameId: number) {
        return await PlaySession.findAll({ where: { gameId } });
    }
}
