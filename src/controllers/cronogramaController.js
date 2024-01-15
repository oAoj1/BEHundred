const cronogramas = require('../models/cronogramaModel.js')

async function lerCronograma(req,res){
    try{
        const lendoCronograma = await cronogramas.find()
        res.status(200).send(lendoCronograma)

    }catch(error){
        console.log(error.message)
    }
}

async function criarCronograma(req,res){
    try{
        const novoCronograma = new cronogramas(req.body)
        await novoCronograma.save()

        .then(() => {
            res.status(201).send(novoCronograma)
        })
        .catch((err) => {
            console.log(err)
        })

    }catch(error){
        console.log(error.message)
    }
}

async function atualizarCronograma(req,res){
    try{
        const id = req.params.id
        const value = req.body

        await cronogramas.findByIdAndUpdate(id, value)

        .then(() => {
            res.status(200).send('Cronograma atualizado')
        })
        .catch((err) => {
            console.log(err)
        })

    }catch(error){
        console.log(error.message)
    }
}

async function deletarCronograma(req,res){
    try{
        const id = req.params.id
        await cronogramas.findByIdAndDelete(id)
        
        .then(() => {
            res.status(200).send('Cronograma deletado')
        })
        .catch((err) => {
            console.log(err)
        })

    }catch(error){
        console.log(error.message)
    }
}

async function lerCronogramaID(req,res){
    try{
        const id = req.params.id
        const lendoCronogramaID = await cronogramas.findById(id)

        res.status(200).send(lendoCronogramaID)

    }catch(error){
        console.log(error.message)
    }
}

async function filtrarDiaCronograma(req,res){
    try{
        const dia = req.query.dia
        await cronogramas.find({dia:dia})

        .then((dia) => (
            res.status(200).send(dia)
        ))
        .catch((err) => {
            console.log(err)
        })
        
    }catch(error){
        console.log(error.message)
    }
}

async function organizarHorasCronograma(req,res){
    try{
        const dia = req.query.dia
        await cronogramas.find({dia:dia}).sort({'horas':1})

        .then((dia) => (
            res.status(200).send(dia)
        ))
        .catch((err) => {
            console.log(err)
        })
        
    }catch(error){
        console.log(error.message)
    }
}

async function deletarTodoCronograma(req,res){
    try{
        await cronogramas.deleteMany({})

        .then(() => {
            res.status(200).send('Cronograma foi deletado com sucesso')            
        })
        .catch((err) => {
            res.status(500).send('Erro ao deletar todo o cronograma')
            console.log(err)
        })

    }catch(error){
        res.status(500).send('Erro interno de servidor')
        console.log(error.message)
    }
}

module.exports = {
    lerCronograma,
    criarCronograma,
    atualizarCronograma,
    deletarCronograma,
    lerCronogramaID,
    filtrarDiaCronograma,
    organizarHorasCronograma,
    deletarTodoCronograma
}