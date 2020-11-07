const express = require('express');
const mongoose = require('mongoose');
const app = express()

//Database
mongoose.connect('mongodb+srv://hayffer:1234567890@cluster0.imvlm.mongodb.net/<dbname>?retryWrites=true&w=majority', {useNewUrlParser: true })
.then(() => console.log("Connected to database"))
.catch(err => console.log(err))

//Middleware
app.use(express.urlencoded({ extended: true}))
app.use(express.json())

//Start Server
app.listen(process.env.PORT || 3000, ()=> console.log("Server started on 3000"))

//Controllers
const FilialControl = require('./controllers/FilialController')
const ProdutoControl = require('./controllers/ProdutoController')
const UsuarioControl = require('./controllers/UsuarioController')

//Routes
app.post('/api/filial/create', FilialControl.create)
app.post('/api/filial/update', FilialControl.update)
app.get('/api/filial/retrieve', FilialControl.retrieve)
app.delete('/api/filial/delete', FilialControl.delete)

app.post('/api/produto/create', ProdutoControl.create)
app.post('/api/produto/update', ProdutoControl.update)
app.get('/api/produto/retrieve', ProdutoControl.retrieve)
app.delete('/api/produto/delete', ProdutoControl.delete)

app.post('/api/usuario/create', UsuarioControl.create)
app.post('/api/usuario/update', UsuarioControl.update)
app.get('/api/usuario/retrieve', UsuarioControl.retrieve)
app.get('/api/usuario/verificUsuario', UsuarioControl.verificUsuario)
app.delete('/api/usuario/delete', UsuarioControl.delete)
