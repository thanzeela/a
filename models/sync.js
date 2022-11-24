const customer = require('./customer')
customer.sync({alert:true});
const booking = require('./booking')
booking.sync({alert:true});
const driver = require('./driver')
driver.sync({alter:true});
const cab = require('./cab')
cab.sync({alter:true});
const user = require('./user')
user.sync({alter:true});