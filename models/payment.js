const{Sequelize,DataTypes} = require('sequelize')
const db = require('./db');
const payment = db.sequelize.define('payment',{
    



    pick_up_location:{
        type:DataTypes.STRING(50),
        allowNull: false,
     


    },
    drop_off_location:{
        type:DataTypes.STRING(50),
        allowNull: false,
        


    },

    cost:{
        type:DataTypes.INTEGER,
        allowNull:false
    }
    
});


module.exports = payment;





