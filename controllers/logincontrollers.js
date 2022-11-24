const customer = require('../models/customer');

module.exports.login = (req, res, next)=>{
    res.render('login');
}

module.exports.loginPost = async (req, res, next)=>{
    const {email, password} = req.body;
    const userFromDb = await customer.findOne({
        where: {email: email, password: password}
    });
    
    if(userFromDb == null){
        return res.render('login', {message: 'No user with this email or password was found.'})
    }

    req.session.userId = userFromDb.id;
    res.redirect('/');
}

module.exports.register = (req, res, next)=>{
    res.render('register');
}

module.exports.registerPost = async (req, res, next)=>{
    const {name,user_name, email, password,mobile_number,address,dob } = req.body;
    let existingUser = await customer.findOne({
        where: {
            email: email
        }
    });

    if(existingUser){
        return res.render('register', {message: 'Already registered.'});
    }

    await customer.create({
        name:name,
        user_name:user_name,
        email: email,
        password: password,
        mobile_number:mobile_number,
        address:address,
        dob:dob
    });

    res.redirect('/login');
}