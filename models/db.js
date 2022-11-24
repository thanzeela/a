const{Sequelize,DataTypes} = require('sequelize')
const sequelize = new Sequelize("cabmanagement","root","Thanzi@2001",{
    host:"localhost",
    dialect:"mysql"
});
module.exports.sequelize = sequelize;