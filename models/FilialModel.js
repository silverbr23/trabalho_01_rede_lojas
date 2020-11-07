const mongoose = require('mongoose');
const Schema = mongoose.Schema
const FilialSchema = new Schema({
name: String,
identificador: String
})


module.exports = mongoose.model('filial', FilialSchema)