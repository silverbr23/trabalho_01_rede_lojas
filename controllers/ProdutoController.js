const ProdutoModel = require('../models/ProdutoModel');

module.exports = {
    create: (req, res) => {
        let produto = new ProdutoModel({
            name: req.body.name,
            identificador: req.body.identificador,
            preco: req.body.preco,
            filial: req.body.filial
        })
        produto.save()
        .then(result => {
            res.json({ success: true, result: result})
        })
        .catch(err => {
             res.json({ success: false, result: err})
            })
    },

    update: (req, res) => {
        ProdutoModel.update({_id: req.body._id}, req.body)
    .then(produto => {
        if (!produto) res.json({ success: false, result: "Usuario Inexistente"})
      
        res.json(produto)
    })
      .catch(err => {
          res.json({ success: false, result: err})
      })
    },

    retrieve: (req, res) => {
        ProdutoModel.find()
        .then(produto => {
            if (!produto) res.json({ success: false, result: "Não foram encontradas Usuarios"})

            res.json({ sucess: true, result: produto})
        })
        .catch(err => {
            res.json({ success: false, result: err})
        })
    },

    delete: (req, res) => {
        ProdutoModel.remove({ _id: req.body._id})
        .then(produto => {
            if (!produto) res.json({ success: false, result: "Nenhuma produto com este Id foi encontrada" })
            res.json({ success: true, result: result })
        })
        .catch(err => res.json({success: false, result: err}))
    },

    getSpecificProduct: (req,res)=>{
        ProdutoModel.find({name:req.body.name})
        .then(produto => {
            if (!produto) res.json({ success: false, result: "Não foram encontradas Usuarios"})

            res.json({ sucess: true, result: produto})
        })
        .catch(err => {
            res.json({ success: false, result: err})
        })
    }
}