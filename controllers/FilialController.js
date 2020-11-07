const FilialModel = require('../models/FilialModel');

module.exports = {
    create: (req, res) => {
        let filial = new FilialModel({
            name: req.body.name,
            identificador: req.body.identificador
        })
        filial.save()
        .then(result => {
            res.json({ success: true, result: result})
        })
        .catch(err => {
             res.json({ success: false, result: err})
            })
    },

    update: (req, res) => {
        FilialModel.update({_id: req.body._id}, req.body)
    .then(filial => {
        if (!filial) res.json({ success: false, result: "Filial Inexistente"})
      
        res.json(filial)
    })
      .catch(err => {
          res.json({ success: false, result: err})
      })
    },

    retrieve: (req, res) => {
        FilialModel.find()
        .then(filial => {
            if (!filial) res.json({ success: false, result: "Não foram encontradas Filiais"})

            res.json({ sucess: true, result: filial})
        })
        .catch(err => {
            res.json({ success: false, result: err})
        })
    },

    delete: (req, res) => {
        FilialModel.remove({ _id: req.body._id})
        .then(filial => {
            if (!filial) res.json({ success: false, result: "Nenhuma filial com este Id foi encontrada" })
            res.json({ success: true, result: result })
        })
        .catch(err => res.json({success: false, result: err}))
    }
}