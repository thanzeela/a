const user = require('../models/customer');
const driver= require('../models/driver');

module.exports = async (req, res, next) => {
    req.identity = {
        isAuthenticated: false,
        user: null
    }
    
    console.log('🚗🚗🚗🚗🚗🚗🚗')
    console.log(req.session.role)
    if (req.session.role == 1) 
    {
        if(req.url == "/login" || req.url == "/create" || req.url == '/driver/driverlogin' || req.url == '/driver/create' || req.url == '/home'){
            return next();
        }
    
        let userId = req.session.userId;
        if(!userId || userId == null){
            return res.redirect("/login");
        }
    
        let userFromDb = await user.findByPk(userId);
        if(userFromDb == null){
            return res.redirect("/login");
        }
    
        req.identity.isAuthenticated = true;
        req.identity.customer = {
            id: userFromDb.dataValues.id,
            name : userFromDb.dataValues.name,
            email: userFromDb.dataValues.email,
            role: userFromDb.dataValues.role
        }
        next();
        
    }
    else{
        console.log('in else block of middleware')
        if(req.url == "/login" || req.url == "/create" || req.url.startsWith("/driver")){
            return next();
        }
    
        let driverId = req.session.driverId;
        if(!driverId || driverId == null){
            return res.redirect("/driver/driverlogin");
        }
    
        let userFromDb = await user.findByPk(driverId);
        if(userFromDb == null){
            return res.redirect("/login");
        }
    
        req.identity.isAuthenticated = true;
        // req.identity.customer = {
        //     id: userFromDb.dataValues.id,
        //     name : userFromDb.dataValues.name,
        //     email: userFromDb.dataValues.email,
        //     role: userFromDb.dataValues.role
        // }
        next();
        
    }
    
    }

    
