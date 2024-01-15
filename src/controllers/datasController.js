const datas = require('../models/datasModel.js')

async function lerDatas(req,res){
    try{
        const lendoDatas = await datas.find()
        res.status(200).send(lendoDatas)
        
    }catch(error){
        console.log(error.message)
    }
}

async function criarDatas(req,res){
    try{
        const novasDatas = new datas(req.body)
        await novasDatas.save()

        .then(() => {
            res.status(200).send(novasDatas)
        })
        .catch((err) => {
            console.log(err)
        })

    }catch(error){
        console.log(error.message)
    }
}

async function atualizarDatas(req,res){
    try{
        const id = req.params.id
        const value = req.body
        await datas.findByIdAndUpdate(id, value)

        .then(() => {
            res.status(200).send({
                menssagem:'Data atualizada',
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

async function deletarDatas(req,res){
    try{
        const id = req.params.id
        await datas.findByIdAndDelete(id)

        .then(() => {
            res.status(200).send('Data excluida')
        })
        .catch((err) => {
            console.log(err)
        })

    }catch(error){
        console.log(error.message)
    }
}

async function lerDataID(req,res){
    try{
        const id = req.params.id
        const lendoDataID = await datas.findById(id)

        res.status(200).send(lendoDataID)

    }catch(error){
        console.log(error.message)
    }
}

async function concluirData(req,res){
    try{
        const id = req.params.id
        const data = await datas.findOne({_id:id})

        if(data.concluido){
            data.concluido = false
        }else{
            data.concluido = true
        }

        await data.save()

        .then(() => {
            res.status(200).send(data)
        })  
        .catch((err) => {
            console.log(err)
        })

    }catch(error){
        console.log(error.message)
    }
}

module.exports = {
    lerDatas,
    criarDatas,
    atualizarDatas,
    deletarDatas,
    lerDataID,
    concluirData
}