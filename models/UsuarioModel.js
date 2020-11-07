const mongoose = require('mongoose');
const Schema = mongoose.Schema
const UsuarioSchema = new Schema({
name: String,
cpf: String,
filial: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'filial'
}
})


module.exports = mongoose.model('usuario', UsuarioSchema)