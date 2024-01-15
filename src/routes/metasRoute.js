const express = require('express')
const router = express.Router()
const metasController = require('../controllers/metasController.js')

//get
router.get('/metas', metasController.lerMetas)
router.get('/metas/:id', metasController.lerMetaID)

//post
router.post('/metas', metasController.criarMetas)
router.post('/metasconcluidas/:id', metasController.concluirMeta)
router.post('/metasprioridade/:id', metasController.prioridadeMeta)

//put
router.put('/metas/:id', metasController.atualizarMetas)

//delete
router.delete('/metas/:id', metasController.deletarMetas)
router.delete('/metas', metasController.deletarTodasMetas)

module.exports = router