const{Sequelize,DataTypes} = require('sequelize')
const db = require('./db');
const driver = db.sequelize.define('driver',{
    driver_id: {
        type:DataTypes.INTEGER,
        primaryKey: true,
        
    },
    driver_name:{
        type:DataTypes.STRING(50),
        allowNull:false,
    },
    
    
    driver_mobile_number:{
        type:DataTypes.STRING(50),
        allowNull: false,
       


    },
    gender:{
        type:DataTypes.STRING(50),
        allowNull: false,
       


    },

    
    
});
module.exports = driver;
