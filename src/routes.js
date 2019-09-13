const express = require("express")
const authMiddleware = require("./middleware/auth");
const toolsController = require('./controllers/tollsController')
const userController = require('./controllers/userController')

const Router = express.Router()


// rotas de users

Router.post('/login', userController.login)
Router.post('/cadastrar', userController.cadastrar)


// rotas para as tools
Router.get('/tools', toolsController.listar)

// parte das rotas que necessita verificação
Router.use(authMiddleware);
//tolls
Router.post('/tools', toolsController.registrar)
Router.delete('/tools/:id', toolsController.deletar)

//usuarios


module.exports = Router;