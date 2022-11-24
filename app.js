const express = require('express');
const parser =require('body-parser');
const customerRoute = require('./routes/customer')
const loginRoutes = require('./routes/login');
const path = require('path');
const {engine} = require('express-handlebars');
const app = express();
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

app.use("/", parser.urlencoded({extended: true}));
app.use("/static", express.static(path.join(__dirname, 'static')));
app.use(customerRoute);
app.use(loginRoutes);


app.listen(5000);










