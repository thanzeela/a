const db = require('../models/payment');
const {body, validationResult} = require('express-validator');
const payment = require('../models/payment');
module.exports.index = (req, res, next) => {
    payment.findAll().then(user => {
        res.render('payment-index', {
            data: user
        });
    })
}
module.exports.create = (req, res, next) => {
    res.render('payment-create');
}

module.exports.createPost = (req, res, next) => {
    console.log(req.body)
    payment.create({
            pick_up_location: req.body.pick_up_location,
            drop_off_location: req.body.drop_off_location,
            cost: req.body.cost,
            
        })
        .then(user => {
            res.redirect("/payment");
        })
}

module.exports.update = (req, res, next) => {
    payment.findByPk(req.params.id)
        .then(user => {
            res.render('payment-update', {
                data: user
            })
        });
}
module.exports.updatePost = async (req, res, next) => {
    var user = await payment.findByPk(req.params.id);
    await user.update(
        {
            pick_up_location: req.body.pick_up_location,
            drop_off_location: req.body.drop_off_location,
            cost: req.body.cost,
            
        },
        {
            where: {id: req.params.id}
        }
    )
    res.redirect('/payment');
}
module.exports.delete = async (req, res, next) => {
    let id = req.params.id;
    let user = await payment.findByPk(id);
    if (user) {
        await payment.destroy({
            where: {
                id: id
            }
        });
        res.redirect("/payment");
    }
}
