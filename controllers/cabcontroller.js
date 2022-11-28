const db = require('../models/cab');
const {body, validationResult} = require('express-validator');
const cab = require('../models/cab');
module.exports.index = (req, res, next) => {
    cab.findAll().then(user => {
        res.render('cab-index', {
            data: user
        });
    })
}
module.exports.create = (req, res, next) => {
    res.render('cab-create');
}

module.exports.createPost = (req, res, next) => {
    console.log(req.body)
    cab.create({
            cab_id: req.body.cab_id,
            cab_number: req.body.cab_number,
            cab_model: req.body.cab_model,
            cab_description: req.body.cab_description,
            cab_total_capacity: req.body.cab_total_capacity,
            driver_id: req.body.driver_id,
           
        })
        .then(user => {
            res.redirect("/cab");
        })
}

module.exports.update = (req, res, next) => {
    cab.findByPk(req.params.id)
        .then(user => {
            res.render('cab-update', {
                data: user
            })
        });
}
module.exports.updatePost = async (req, res, next) => {
    var user = await cab.findByPk(req.params.id);
    await user.update(
        {
            cab_id: req.body.cab_id,
            cab_number: req.body.cab_number,
            cab_model: req.body.cab_model,
            cab_description: req.body.cab_description,
            cab_total_capacity: req.body.cab_total_capacity,
            driver_id: req.body.driver_id,
            
            
        },
        {
            where: {id: req.params.id}
        }
    )
    res.redirect('/cab');
}
module.exports.delete = async (req, res, next) => {
    let id = req.params.id;
    let user = await cab.findByPk(id);
    if (user) {
        await cab.destroy({
            where: {
                cab_id: id
            }
        });
        res.redirect("/cab");
    }
}
