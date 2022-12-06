const customer = require('./customer')

const booking = require('./booking')

const driver = require('./driver')

const cab = require('./cab')


const payment = require('./payment')




driver.hasMany(cab,{foreignKey:'driver_id'});
cab.belongsTo(driver,{
    foreignKey:'driver_id'
});
cab.hasMany(booking,{foreignKey:'cab_id'});
booking.belongsTo(cab,{
    foreignKey:'cab_id'
});
customer.hasMany(booking,{foreignKey:'id'});
booking.belongsTo(customer,{
    foreignKey:'id'
});






// customer.sync({alter:true});
booking.sync({alter: true});
// driver.sync();
// cab.sync();
// payment.sync();