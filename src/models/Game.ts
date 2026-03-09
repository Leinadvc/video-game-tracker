import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';

class Game extends Model {
    public id!: number;
    public title!: string;
    public genre!: string;
    public platform!: string;
    public coverUrl!: string;
}

Game.init(
    {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    genre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    platform: {
      type: DataTypes.STRING,
      allowNull: false
    },
    coverUrl: {
      type: DataTypes.STRING
    }
  },
  {
    sequelize,
    tableName: 'games'
  }
);

export default Game;
