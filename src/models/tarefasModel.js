const mongoose = require('mongoose')

const tarefaSchema = new mongoose.Schema({
    id:String,
    tarefa:{type:String, require},
    prioridade:{type:Boolean, require},
    concluido:{type:Boolean, require},
    detalhes:String
})

const tarefas = mongoose.model('tarefas', tarefaSchema)

module.exports = tarefas