const express = require('express');
const parser =require('body-parser');
const customerRoute = require('./routes/customer')
const loginRoutes = require('./routes/login');
const bookingRoutes = require('./routes/booking');
const cabRoutes = require('./routes/cab');
const driverRoutes = require('./routes/driver');
const homeRoutes = require('./routes/home');
const viewcabsRoutes = require('./routes/viewcabs');
const paymentRoutes = require('./routes/payment');
const path = require('path');
const cookieSession = require('cookie-session');
const {engine} = require('express-handlebars');
const authMiddleware = require('./middlewares/authenticationMiddleware');

const app = express();
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

app.use("/", parser.urlencoded({extended: true}));
app.use("/static", express.static(path.join(__dirname, 'static')));
app.use(cookieSession({
    name: 'session',
    httpOnly: true,
    keys: ["asdghjhgsdahjsgdhjasd"],
    maxAge: 24 * 60 * 60 * 1000
}));

app.use(authMiddleware);
app.use(customerRoute);
app.use(loginRoutes);
app.use("/booking",bookingRoutes);
app.use("/cab",cabRoutes);
app.use("/driver",driverRoutes);
app.use("/payment",paymentRoutes);
app.use(homeRoutes);
app.use(viewcabsRoutes)
;


function handler(req, res){
    res.send("Hello World")
}
app.get('/test', handler)


app.listen(5000);










