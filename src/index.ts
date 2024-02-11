import express from 'express';
import { environmentVariables, isProduction } from './libs/environment/environment';
import { PrismaClient } from '@prisma/client';

const app = express();
const PORT = environmentVariables.port;

app.get('/', (req, res) => {
  res.send('Hello world!');
});

const prisma = new PrismaClient();

app.listen(PORT, async () => {
  console.log(`Running in http://localhost:${PORT}`);
  if (!isProduction) {
    console.log(`Happy hacking! This are the environment variables:`, environmentVariables);
    try {
      await prisma.$connect();
      console.log('Conexión exitosa a la base de datos.');
      await prisma.$disconnect();
    } catch (error) {
      console.error('Error al conectar a la base de datos:', error);
    }
  }
});
