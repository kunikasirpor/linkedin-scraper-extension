import { DataTypes } from 'sequelize';

export default (sequelize) => {
  return sequelize.define('Profile', {
    id:              { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name:            { type: DataTypes.STRING(100),  allowNull: false },
    url:             { type: DataTypes.STRING(255),  allowNull: false, unique: true },
    about:           { type: DataTypes.TEXT,         allowNull: true },
    bio:             { type: DataTypes.TEXT,         allowNull: true },
    location:        { type: DataTypes.STRING(100),  allowNull: true },
    followerCount:   { type: DataTypes.INTEGER,      allowNull: true },
    connectionCount: { type: DataTypes.INTEGER,      allowNull: true }
  }, {
    tableName: 'profiles',
    timestamps: false
  });
};
