const metas = require('../models/metasModel.js')

async function lerMetas(req,res){
    try{
        const lendoMetas = await metas.find()
        res.status(200).send(lendoMetas)

    }catch(error){
        console.log(error.message)
    }
}

async function criarMetas(req,res){
    try{
        const novaMeta = new metas(req.body)
        await novaMeta.save()

        .then(() => {
            res.status(201).send(novaMeta)
        })
        .catch((err) => {
            console.log(err)
        })

    }catch(error){
        console.log(error.message)
    }
}

async function atualizarMetas(req,res){
    try{
        const id = req.params.id
        const value = req.body

        await metas.findByIdAndUpdate(id, value)

        .then(() => {
            res.status(200).send({
                menssagem:'Meta atualizada',
                value,
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

async function deletarMetas(req,res){
    try{
        const id = req.params.id
        await metas.findByIdAndDelete(id)

        .then(() => {
            res.status(200).send('Meta deletada')
        })
        .catch((err) => {
            console.log(err)
        })

    }catch(error){
        console.log(error.message)
    }
}

async function lerMetaID(req,res){
    try{
        const id = req.params.id
        const lendoMetaID = await metas.findById(id)

        res.status(200).send(lendoMetaID)

    }catch(error){
        console.log(error.message)
    }
}

async function concluirMeta(req,res){
    try{
        const id = req.params.id
        const meta = await metas.findOne({_id:id})

        if(meta.concluido){
            meta.concluido = false
        }else{
            meta.concluido = true
        }

        await meta.save()

        .then(() => {
            res.status(200).send(meta)
        })
        .catch((err) => {
            console.log(err)
        })

    }catch(error){
        console.log(error.message)
    }
}

async function prioridadeMeta(req,res){
    try{
        const id = req.params.id
        const meta = await metas.findOne({_id:id})

        if(meta.prioridade){
            meta.prioridade = false
        }else{
            meta.prioridade = true
        }

        await meta.save()

        .then(() => {
            res.status(200).send(meta)
        })
        .catch((err) => {
            console.log(err)
        })

    }catch(error){
        console.log(error.message)
    }
}

async function deletarTodasMetas(req,res){
    try{
        await metas.deleteMany({})

        .then(() => {
            res.status(200).send('Metas foram deletadas com sucesso')            
        })
        .catch((err) => {
            res.send('Erro ao deletar todas metas')
            console.log(err)
        })

    }catch(error){
        res.status(500).send('Erro interno de servidor')
        console.log(error.message)
    }
}

module.exports = {
    lerMetas,
    criarMetas,
    atualizarMetas,
    deletarMetas,
    lerMetaID,
    concluirMeta,
    prioridadeMeta,
    deletarTodasMetas
}