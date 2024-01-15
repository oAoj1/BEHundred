const express = require('express')
const router = express.Router()
const cronogramaController = require('../controllers/cronogramaController.js')

//get
router.get('/cronograma', cronogramaController.lerCronograma)
router.get('/cronogram/:id', cronogramaController.lerCronogramaID)
router.get('/filtrardiacronograma', cronogramaController.filtrarDiaCronograma)
router.get('/organizarhoras', cronogramaController.organizarHorasCronograma)

//post
router.post('/cronograma', cronogramaController.criarCronograma)

//put
router.put('/cronograma/:id', cronogramaController.atualizarCronograma)

//delete
router.delete('/cronograma/:id', cronogramaController.deletarCronograma)
router.delete('/cronograma', cronogramaController.deletarTodoCronograma)

module.exports = router