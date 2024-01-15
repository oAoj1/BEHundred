const express = require('express')
const router = express.Router()
const faculdadeController = require('../../controllers/anotacoes/faculdadeController.js')

//get
router.get('/faculdade', faculdadeController.lerFaculdade)

//post
router.post('/faculdade', faculdadeController.criarFaculdade)

module.exports = router