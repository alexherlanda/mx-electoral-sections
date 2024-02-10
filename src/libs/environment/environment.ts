import * as dotenv from 'dotenv';
dotenv.config();

type Environment = 'development' | 'production';

type DatabaseConfig = {
  url: string;
  log: boolean;
};

type EnvironmentVariables = {
  environment: Environment;
  port: number;
  database: DatabaseConfig;
};

const sanitizedPort = Number.isNaN(process.env.PORT) ? 3000 : Number(process.env.PORT);

function sanitizeEnvironmentName(): Environment {
  switch (process.env.NODE_ENV) {
    case 'development':
      return 'development';

    case 'production':
      return 'production';

    default:
      return 'development';
  }
}

function sanitizeTrueFalseString(variable: string | undefined) {
  console.log('variable', variable);
  return variable === 'true';
}

export const environmentVariables: EnvironmentVariables = {
  environment: sanitizeEnvironmentName(),
  port: sanitizedPort,
  database: {
    url: String(process.env.DATABASE_URL),
    log: sanitizeTrueFalseString(process.env.DATABASE_LOG),
  },
};

export const isProduction = environmentVariables.environment === 'production';
