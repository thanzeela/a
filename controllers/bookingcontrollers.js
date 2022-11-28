const db = require('../models/booking');
const {body, validationResult} = require('express-validator');
const booking = require('../models/booking');
module.exports.bookingindex = (req, res, next) => {
    booking.findAll().then(user => {
        res.render('booking-index', {
            data: user
        });
    })
}
module.exports.bookingcreate = (req, res, next) => {
    res.render('booking-create');
}

module.exports.bookingcreatePost = (req, res, next) => {
    console.log(req.body)
    
    booking.create({

        
        booking_id:req.body.booking_id,
        choose_your_cab: req.body.choose_your_cab,
        id: req.body.id,
        date_of_booking: req.body.date_of_booking,
        date_of_travel: req.body.date_of_travel,
        number_of_passengers: req.body.number_of_passengers,
        pick_up_time: req.body.pick_up_time,
        pick_up_location: req.body.pick_up_location,
        drop_off_location: req.body.drop_off_location 





            
        })
        .then(user => {
            res.redirect("/booking/");
        })
}

module.exports.bookingupdate = (req, res, next) => {
    booking.findByPk(req.params.id)
        .then(user => {
            res.render('booking-update', {
                data: user
            })
        });
}
module.exports.bookingupdatePost = async (req, res, next) => {
    var bookingfromdb = await booking.findByPk(req.params.id);
    console.log(req.body)
    await bookingfromdb.update(
        {
            booking_id:req.body.booking_id,
            choose_your_cab: req.body.choose_your_cab,
            id: req.body.id,
            date_of_booking: req.body.date_of_booking,
            date_of_travel: req.body.date_of_travel,
            number_of_passengers: req.body.number_of_passengers,
            pick_up_time:req.body.pick_up_time,
             pick_up_location: req.body.pick_up_location,
            drop_off_location: req.body.drop_off_location 
            
            
        },
        {
            where: {id: req.params.id}
        }
    )
    res.redirect('/booking/');
}
module.exports.bookingdelete = async (req, res, next) => {
    let id = req.params.id;
    let user = await booking.findByPk(id);
    if (user) {
        await booking.destroy({
            where: {
                booking_id: id
            }
        });
        res.redirect("/booking/");
    }
}
