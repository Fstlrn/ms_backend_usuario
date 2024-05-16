import { config } from 'dotenv';
import swaggerAutogen from 'swagger-autogen';
config();

let port = process.env.PORT || 3000;

const doc = {
  info: {
    title: 'Seguridad',
    description: 'Manejo de usuarios'
  },
  host: 'localhost:' + port + "/api"
};

const outputFile = './swagger-output.json';
const routes = ['../routes/routes.main.js', '../routes/router.user.js'];



swaggerAutogen()(outputFile, routes, doc);