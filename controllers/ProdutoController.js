const ProdutoModel = require('../models/ProdutoModel');

module.exports = {
    create: (req, res) => {
        let usuario = new ProdutoModel({
            name: req.body.name,
            identificador: req.body.identificador,
            filial: req.body.filial
        })
        usuario.save()
        .then(result => {
            res.json({ success: true, result: result})
        })
        .catch(err => {
             res.json({ success: false, result: err})
            })
    },

    update: (req, res) => {
        UsuarioModel.update({_id: req.body._id}, req.body)
    .then(usuario => {
        if (!usuario) res.json({ success: false, result: "Usuario Inexistente"})
      
        res.json(usuario)
    })
      .catch(err => {
          res.json({ success: false, result: err})
      })
    },

    retrieve: (req, res) => {
        UsuarioModel.find()
        .then(usuario => {
            if (!usuario) res.json({ success: false, result: "Não foram encontradas Usuarios"})

            res.json({ sucess: true, result: result})
        })
        .catch(err => {
            res.json({ success: false, result: err})
        })
    },

    delete: (req, res) => {
        UsuarioModel.remove({ _id: req.body._id})
        .then(usuario => {
            if (!usuario) res.json({ success: false, result: "Nenhuma usuario com este Id foi encontrada" })
            res.json({ success: true, result: result })
        })
        .catch(err => res.json({success: false, result: err}))
    }
}