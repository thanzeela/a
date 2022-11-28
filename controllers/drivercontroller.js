const db = require('../models/driver');
const {body, validationResult} = require('express-validator');
const driver = require('../models/driver');
module.exports.index = (req, res, next) => {
    driver.findAll().then(user => {
        res.render('driver-index', {
            data: user
        });
    })
}
module.exports.create = (req, res, next) => {
    res.render('driver-create');
}

module.exports.createPost = (req, res, next) => {
    console.log(req.body)
    driver.create({
            driver_id: req.body.driver_id,
            driver_name: req.body.driver_name,
            driver_mobile_number: req.body.driver_mobile_number,
            gender: req.body.gender,
            
        })
        .then(user => {
            res.redirect("/driver");
        })
}

module.exports.update = (req, res, next) => {
    driver.findByPk(req.params.id)
        .then(user => {
            res.render('driver-update', {
                data: user
            })
        });
}
module.exports.updatePost = async (req, res, next) => {
    var user = await driver.findByPk(req.params.id);
    await user.update(
        {
            driver_id: req.body.driver_id,
            driver_name: req.body.driver_name,
            driver_mobile_number: req.body.driver_mobile_number,
            gender: req.body.gender,
            
            
        },
        {
            where: {id: req.params.id}
        }
    )
    res.redirect('/driver');
}
module.exports.delete = async (req, res, next) => {
    let id = req.params.id;
    let user = await driver.findByPk(id);
    if (user) {
        await driver.destroy({
            where: {
                driver_id: id
            }
        });
        res.redirect("/driver");
    }
}
