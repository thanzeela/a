const{Sequelize,DataTypes} = require('sequelize')
const db = require('./db');
const cab = db.sequelize.define('cab',{
    cab_id: {
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true,
        
    },
    cab_number: {
        type:DataTypes.INTEGER,
        allowNull:false,
       
    },
    cab_model:{
        type:DataTypes.STRING(50),
        allowNull:false,
    },
    cab_description:{
        type:DataTypes.STRING(50),
        allowNull:false,
    },
    cab_total_capacity:{
        type:DataTypes.STRING(50),
        allowNull: false,
        


    },
    driver_id:{
        type:DataTypes.INTEGER,
        allowNull:false
    }
   
});
module.exports = cab;

    