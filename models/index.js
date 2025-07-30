import { Sequelize } from 'sequelize';
import config from '../config/config.js';
import defineProfile from './profile.js';

const cfg = config.development;
export const sequelize = new Sequelize(cfg.database, cfg.username, cfg.password, {
  host: cfg.host,
  dialect: cfg.dialect,
  logging: cfg.logging
});

export const Profile = defineProfile(sequelize);
