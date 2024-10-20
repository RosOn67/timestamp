const express = require('express');
const { DateParser, currentDate } = require('./controller.js');

const routes = express.Router();

routes.get("/", currentDate);
routes.get("/:date", DateParser);

module.exports = routes;
