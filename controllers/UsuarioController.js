const UsuarioModel = require('../models/UsuarioModel');

module.exports = {
    create: (req, res) => {
        let usuario = new UsuarioModel({
            name: req.body.name,
            cpf: req.body.cpf,
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

            res.json({ sucess: true, result: usuario})
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