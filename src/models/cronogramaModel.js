const mongoose = require('mongoose')

const cronogramaSchema = new mongoose.Schema({
    id:String,
    tarefa:{type:String, require},
    dia:{type:String, require},
    horas:{type: String, require}
})

const cronogramas = mongoose.model('cronogramas', cronogramaSchema)

module.exports = cronogramas