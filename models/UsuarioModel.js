const mongoose = require('mongoose');
const Schema = mongoose.Schema
const UsuarioSchema = new Schema({
name: String,
cpf: String
})


module.exports = mongoose.model('usuario', UsuarioSchema)