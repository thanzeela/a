const db = require('../models/driver');
const {body, validationResult} = require('express-validator');
const booking = require('../models/booking')
const driver = require('../models/driver');
const cab = require('../models/cab');
module.exports.driverlogin = (req, res, next) => {
    res.render('driverlogin');
}

module.exports.driverloginPost = async (req, res, next) => {
    var credentials = await driver.findAll({where:{
        driver_email : req.body.driver_email,
        driver_password : req.body.driver_password

    }});
    // console.log(credentials[0].dataValues)

    if (credentials.length == 0) {
        return res.render('driverlogin',{message: 'Invalid credentials'})
    }
    req.session.driverId = credentials[0].dataValues.driver_id;
    console.log('this is from driver controller cookie driver id '+ req.session.driverId)
    req.session.role = 0;

    
    // res.send('login succesful')

    res.render('drivehome')
}
module.exports.driverHome = (req, res, next) => {
    res.render('driverhome')
}
//Registration












module.exports.index = (req, res, next) => {
    driver.findAll().then(user => {
        res.render('driver-index', {
            data: user,
            role:req.identity.customer.role
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
            driver_email : req.body.driver_email,
      
       
        driver_password : req.body.driver_password,
       
        driver_license_no : req.body.driver_license_no,

            
        })
        .then(user => {
            res.redirect("/driver/driverlogin");
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

module.exports.driverHome = (req, res, next)=>{
    res.render('drivehome')
}
module.exports.allBooking= (req,res,next)=>{
    booking.findAll({

        where: {
    
            driver_id : req.session.driverId
    
        }
    
    
    
    }).then(result =>{
    
        res.render('bookingdriver-index', {
    
            data: result
    
           
    
        })
    
       
    
    })
    
     }
    module.exports.viewBooking =async(req,res,next)=>{
        console.log(req.session.driverId);
        const cabresult=await cab.findOne({attributes:['cab_id'],where:{driver_id:req.session.driverId}})
        const result = await booking.findAll({where : {cab_id : cabresult.dataValues.cab_id}})
        let data = {data : result}
        console.log(data);
        res.render('bookingdriver-index',data);
    }
     



