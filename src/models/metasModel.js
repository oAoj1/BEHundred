const mongoose = require('mongoose')

const metasSchema = new mongoose.Schema({
    id:String,
    meta:{type: String, require},
    prazo:{type: String, require},
    concluido:{type: Boolean, require},
    prioridade:{type: Boolean, require}
})

const metas = mongoose.model('metas', metasSchema)

module.exports = metas