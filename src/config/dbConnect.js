const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://jao:711@cluster0.tbw1jlx.mongodb.net/ahundreddaydatas')

let db = mongoose.connection

module.exports = db