import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';
import Game from './Game';

class PlaySession extends Model {
    public id!: number;
    public gameId!: number;
    public date!: Date;
    public hoursPlayed!: number;
    public notes!: string;
}

PlaySession.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        gameId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        hoursPlayed: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        notes: {
            type: DataTypes.STRING
        }
    },
    {
        sequelize,
        tableName: 'play_sessions'}
);

// Define associations clearly here for educational purposes
Game.hasMany(PlaySession, { foreignKey: 'GameId' });
PlaySession.belongsTo(Game, { foreignKey: 'GameId' });

export default PlaySession;
