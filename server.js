require("dotenv/config")
const express = require("express")
const cors = require("cors")
const app = express()
const Router = require('./src/routes')
const database = require('mongoose')

app.use(express.json())
app.use(Router)
app.use(cors())

//LINKDB = Link para conexão do banco de dados, deve ser colocado no arquivo ".env"
database.connect(process.env.LINKDB, { useNewUrlParser: true })


app.listen(process.env.PORT || 3000)