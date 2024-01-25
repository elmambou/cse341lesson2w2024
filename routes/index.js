const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1');
 
routes.get('/', lesson1Controller.emilyRoute);
routes.get('/William', lesson1Controller.hannahRoute);
routes.get('/Chante', lesson1Controller.ChanteMooreRoute);
module.exports = routes;