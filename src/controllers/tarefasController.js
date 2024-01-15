const tarefas = require('../models/tarefasModel.js')

async function lerTarefas(req,res){
    try{
        const lendoTarefas = await tarefas.find()
        res.status(200).send(lendoTarefas)

    }catch(error){
        console.log(error.message)
    }
}

async function criarTarefas(req,res){
    try{
        const novaTarefa = new tarefas(req.body)
        await novaTarefa.save()

        .then(() => {
            res.status(201).send(novaTarefa)
        })
        .catch((err) => {
            console.log(err)
        })

    }catch(error){
        console.log(error.message)
    }
}

async function atualizarTarefas(req,res){
    try{
        const id = req.params.id
        const value = req.body
        await tarefas.findByIdAndUpdate(id, value)

        .then(() => {
            res.status(200).send({
                menssagem:'Tarefa atualizada',
                valor:value,
                id:id
            })
        })
        .catch((err) => {
            console.log(err)
        })

    }catch(error){
        console.log(error.message)
    }
}

async function deletarTarefas(req,res){
    try{
        const id = req.params.id
        await tarefas.findByIdAndDelete(id)

        .then(() => {
            res.status(200).send('Tarefa deletada')
        })
        .catch((err) => {
            console.log(err)
        })

    }catch(error){
        console.log(error.message)
    }
}

async function lerTarefaID(req,res){
    try{
        const id = req.params.id
        const lendoTarefaID = await tarefas.findById(id)

        res.status(200).send(lendoTarefaID)

    }catch(error){
        console.log(error.message)
    }
}

async function concluirTarefa(req,res){
    try{
        const id = req.params.id
        const tarefa = await tarefas.findOne({ _id: id })

        if(tarefa.concluido){
            tarefa.concluido = false
        }else{
            tarefa.concluido = true
        }

        await tarefa.save()

        .then(() => {
            res.json(tarefa)
        })
        .catch((err) => {
            res.send(err)
        })

    }catch(error){
        console.log(error.message)
    }
}

async function prioridadeTarefa(req,res){
    try{
        const id = req.params.id
        const tarefa = await tarefas.findOne({_id:id})

        if(tarefa.prioridade){
            tarefa.prioridade = false
        }else{
            tarefa.prioridade = true
        }

        await tarefa.save()

        .then(() => {
            res.json(tarefa)
        })
        .catch((err) => {
            console.log(err)
        })

    }catch(error){
        console.log(error.message)
    }
}

async function filtrarPrioridadeTarefa(req,res){
    try{
        const prioridadeVerdade = await tarefas.find({ prioridade:true })

        res.send(prioridadeVerdade) 

    }catch(error){
        console.log(error.message)
    }
}

async function deletarTodasTarefas(req,res){
    try{    
        await tarefas.deleteMany({})

        .then(() => {
            res.send('Todas tarefas deletadas')
        })
        .catch((err) => {
            res.send('Erro ao deletar todas tarefas')
            console.log(err)
        })

    }catch(error){
        res.status(500).send('Erro interno de servidor')
        console.log(error.message)
    }
}

module.exports = {
    lerTarefas,
    criarTarefas,
    atualizarTarefas,
    deletarTarefas,
    lerTarefaID,
    concluirTarefa,
    prioridadeTarefa,
    filtrarPrioridadeTarefa,
    deletarTodasTarefas
}