const customer = require('./customer')

const booking = require('./booking')

const driver = require('./driver')

const cab = require('./cab')




// driver.hasMany(cab,{foreignKey:'driver_id'});
// cab.belongsTo(driver,{
//     foreignKey:'driver_id'
// });
// driver.hasMany(booking,{foreignKey:'driver_id'});
// booking.belongsTo(driver,{
//     foreignKey:'driver_id'
// });
cab.hasMany(booking,{foreignKey:'cab_id'});
booking.belongsTo(cab,{
    foreignKey:'cab_id'
});
customer.hasMany(booking,{foreignKey:'id'});
booking.belongsTo(customer,{
    foreignKey:'id'
});






customer.sync({alert:true});
booking.sync({alert:true});
driver.sync({alter:true});
cab.sync({alter:true});