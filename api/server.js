const express = require("express")

const server = express();

// DO YOUR MAGIC

const CarsRouter = require('../api/cars/cars-router');

server.use(express.json());
server.use('/api/cars', CarsRouter);

module.exports = server
