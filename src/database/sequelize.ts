import { Sequelize } from 'sequelize';
import { options, DATABASE_URL } from './config';

const sequelize = new Sequelize(DATABASE_URL, options);

export default sequelize;
