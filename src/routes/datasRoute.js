const express = require('express')
const router = express.Router()
const datasController = require('../controllers/datasController.js')

//get
router.get('/datas', datasController.lerDatas)
router.get('/datas/:id', datasController.lerDataID)

//post
router.post('/datas', datasController.criarDatas)
router.post('/datasconcluir/:id', datasController.concluirData)

//put
router.put('/datas/:id', datasController.atualizarDatas)

//delete
router.delete('/datas/:id', datasController.deletarDatas)

module.exports = router