import express from 'express';
import {DateParser, currentDate} from './controller.js';

const routes = express.Router();

routes.get("/", currentDate);
routes.get("/:date", DateParser);

export default routes;