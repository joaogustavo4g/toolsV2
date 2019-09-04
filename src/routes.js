const express = require("express")
const toolsController = require('./controllers/tollsController')

const Router = express.Router()

Router.get('/tools', toolsController.listar)
Router.post('/tools', toolsController.registrar)
Router.delete('/tools/:id', toolsController.deletar)

    
module.exports = Router;