const express = require('express')
const cors = require('cors')

const app = express()

const ligarDB = require('./config/dbConnect.js')

//rotas padroes
const tarefasRoute = require('./routes/tarefasRoute.js')
const datasRoute = require('./routes/datasRoute.js')
const metasRoute = require('./routes/metasRoute.js')
const cronogramaRoute = require('./routes/cronogramaRoute.js')

//rotas anotacoes
const faculdadeRoute = require('./routes/anotacoes/faculdadeRoute.js')

const port = process.env.PORT || 3000

app.use(express.json())

//conectando com mongodb
ligarDB.once('open', () => {
    console.log('MongoDB conectado!')
})

ligarDB.on('error', () => {
    console.log('Erro ao conectar com MongoDB')
})

//ligando o servidor
app.listen(port, () => {
    console.log(`Server ligado http://localhost:${port}`)
})

app.get('/', (req,res) => {
    res.send('Sendo o melhor!')
})

//conectando as rotas
app.use(
    cors(),
    tarefasRoute,
    datasRoute,
    metasRoute,
    faculdadeRoute,
    cronogramaRoute
)