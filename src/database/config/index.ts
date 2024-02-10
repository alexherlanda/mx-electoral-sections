import { Options } from 'sequelize';
import { environmentVariables, isProduction } from '../../libs/environment/environment';

export const DATABASE_URL = environmentVariables.database.url;

const logger = (sql: string, timing?: number) => {
  console.log({ sql, timing });
};

export const options: Options = {
  dialect: 'postgres',
  logging: environmentVariables.database.log ? logger : false,
  dialectOptions: isProduction
    ? {
        ssl: {
          require: true,
          rejectUnauthorized: false,
        },
      }
    : undefined,
};
