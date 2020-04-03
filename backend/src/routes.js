const express = require('express');

const UsuarioController = require('./controllers/UsuarioController');
const LoginKeyController = require('./controllers/LoginKeyController');
const SessionController = require('./controllers/SessionController');


const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/usuarios', UsuarioController.index);
routes.post('/usuarios', UsuarioController.create);

routes.get('/loginkeys', LoginKeyController.index);
routes.post('/loginkeys', LoginKeyController.create);

routes.delete('/loginkeys/:id',LoginKeyController.delete )


module.exports = routes;