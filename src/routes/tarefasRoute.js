const express = require('express')
const router = express.Router()
const tarefasController = require('../controllers/tarefasController.js')

//get
router.get('/tarefas', tarefasController.lerTarefas)
router.get('/tarefas/:id', tarefasController.lerTarefaID)
router.get('/tarefasprioridade', tarefasController.filtrarPrioridadeTarefa)

//post
router.post('/tarefas', tarefasController.criarTarefas)
router.post('/tarefasconcluir/:id', tarefasController.concluirTarefa)
router.post('/tarefasprioridade/:id', tarefasController.prioridadeTarefa)

//put
router.put('/tarefas/:id', tarefasController.atualizarTarefas)

//delete
router.delete('/tarefas/:id', tarefasController.deletarTarefas)
router.delete('/tarefas', tarefasController.deletarTodasTarefas)

module.exports = router