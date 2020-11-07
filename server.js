const express = require('express');
const mongoose = require('mongoose');
const app = express()

//Database
mongoose.connect('mongodb://127.0.0.1:27017/piffermart', {useNewUrlParser: true })
.then(() => console.log("Connected to database"))
.catch(err => console.log(err))

//Middleware
app.use(express.urlencoded({ extended: true}))
app.use(express.json())

//Start Server
app.listen(3000, ()=> console.log("Server started on 3000"))

//Controllers
const FilialControl = require('./controllers/FilialController')
const ProdutoControl = require('./controllers/ProdutoController')
const UsuarioControl = require('./controllers/UsuarioController')

//Routes
app.post('/api/filial/create', FilialControl.create)
app.post('/api/filial/update', FilialControl.update)
app.get('/api/filial/retrieve', FilialControl.retrieve)
app.delete('/api/filial/delete', FilialControl.delete)

app.post('/api/filial/create', ProdutoControl.create)
app.post('/api/filial/update', ProdutoControl.update)
app.get('/api/filial/retrieve', ProdutoControl.retrieve)
app.delete('/api/filial/delete', ProdutoControl.delete)

app.post('/api/filial/create', UsuarioControl.create)
app.post('/api/filial/update', UsuarioControl.update)
app.get('/api/filial/retrieve', UsuarioControl.retrieve)
app.delete('/api/filial/delete', UsuarioControl.delete)
