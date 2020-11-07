const mongoose = require('mongoose');
const Schema = mongoose.Schema
const ProdutoSchema = new Schema({
nome: String,
identificador: String,
preço: Number,
filial: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'filial'
}
})


module.exports = mongoose.model('produto', ProdutoSchema)