const user = require('../models/customer');

module.exports = async (req, res, next) => {
    req.identity = {
        isAuthenticated: false,
        user: null
    }
    console.log('🚗🚗🚗🚗🚗🚗🚗')
    if(req.url == "/login" || req.url == "/create"){
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