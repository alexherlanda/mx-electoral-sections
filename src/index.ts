import express from 'express';
import { environmentVariables, isProduction } from './libs/environment/environment';
import sequelize from './database/sequelize';

const app = express();
const PORT = environmentVariables.port;

app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.listen(PORT, async () => {
  console.log(`Running in http://localhost:${PORT}`);
  if (!isProduction) {
    console.log(`Happy hacking! This are the environment variables:`, environmentVariables);
    try {
      await sequelize.authenticate();
      console.log('Connection to the database has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  }
});
