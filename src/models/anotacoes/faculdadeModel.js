const mongoose = require('mongoose')

const faculdadeSchema = new mongoose.Schema({
    id:String,
    anotacaoFaculdade:{type:String, require},
    tipo:{type:String, require},
    dataEntrega:{type:String, require},
    materia:{type:String, require},
    detalhes:String
})

const faculdades = mongoose.model('faculdades', faculdadeSchema)

module.exports = faculdades