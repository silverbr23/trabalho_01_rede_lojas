const mongoose = require('mongoose');
const Schema = mongoose.Schema
const ProdutoSchema = new Schema({
nome: String,
identificador: String,
preço: Number
})


module.exports = mongoose.model('produto', ProdutoSchema)