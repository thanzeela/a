const{Sequelize,DataTypes} = require('sequelize')
const db = require('./db');
const customer = db.sequelize.define('customer',{
    id: {
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name:{
        type:DataTypes.STRING(50),
        allowNull:false,
    },
    user_name:{
        type:DataTypes.STRING(50),
        allowNull:false,
    },
    email:{
        type:DataTypes.STRING(50),
        allowNull: false,
        unique:true


    },
    password:{
        type:DataTypes.STRING(50),
        allowNull: false,
       


    },
    mobile_number:{
        type:DataTypes.INTEGER,
        allowNull: false,
       


    },
    address:{
        type:DataTypes.STRING(50),
        allowNull: false,
       


    },

    dob:{
        type:DataTypes.DATE,
        
        allowNull:false
    },
    
});
module.exports = customer;
