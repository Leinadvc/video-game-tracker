import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';
import Game from './Game';

class PlaySession extends Model {
    public id!: number;
    public gameId!: number;
    public hoursPlayed!: number;
    public notes!: string;
}

PlaySession.init(
{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },

    gameId:{
        type:DataTypes.INTEGER,
        allowNull:false
    },

    hoursPlayed:{
        type:DataTypes.FLOAT,
        allowNull:false
    },

    notes:{
        type:DataTypes.TEXT,
        allowNull:true
    }

},
{
    sequelize,
    tableName:'play_sessions'
}
);

// Define associations clearly here for educational purposes
Game.hasMany(PlaySession, { foreignKey: 'gameId' });
PlaySession.belongsTo(Game, { foreignKey: 'gameId' });

export default PlaySession;
