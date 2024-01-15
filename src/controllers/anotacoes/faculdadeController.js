const faculdades = require('../../models/anotacoes/faculdadeModel.js')

async function lerFaculdade(req,res){
    try{
        const lendoFaculdade = await faculdades.find()
        res.status(200).send(lendoFaculdade)

    }catch(error){
        console.log(error.message)
    }
}

async function criarFaculdade(req,res){
    try{
        const novaFaculdade = new faculdades(req.body)
        await novaFaculdade.save()

        .then(() => {
            res.status(201).send(novaFaculdade)
        })
        .catch((err) => {
            console.log(err)
        })

    }catch(error){
        console.log(error.message)
    }
}


module.exports = {
    lerFaculdade,
    criarFaculdade
}