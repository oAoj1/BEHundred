const mongoose = require('mongoose')

const datasSchema = new mongoose.Schema({
    id:String,
    evento:{type:String, require},
    data:{type:String, require},
    horas:{type:String, require},
    concluido:{type: Boolean, require}
})

const datas = mongoose.model('datas', datasSchema)

module.exports = datas