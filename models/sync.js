const customer = require('./customer')

const booking = require('./booking')

const driver = require('./driver')

const cab = require('./cab')




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






customer.sync();
booking.sync();
driver.sync();
cab.sync();