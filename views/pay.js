const payment = require("../models/payment");
var pickup = "abc"
var dropoff = "bcd"
payment.findOne({
    where : {
        pick_up : pickup,
        dropoff : dropoff,
    }
})

payment.c