const { Schema } = require('mongoose');

const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Contacts API',
    description: 'Simple API to manage contacts',
  },
  host: 'localhost:3000',
  schemes: ['http']
};

const outputFile = './swagger.json';
const routes = ['./routes/index.js'];

swaggerAutogen(outputFile, routes, doc);