const{Sequelize,DataTypes} = require('sequelize')
const db = require('./db');
const booking = db.sequelize.define('booking',{
    booking_id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    choose_your_cab: {
        type:DataTypes.STRING(50),
        allowNull:false,
    },
    
    
    date_of_booking: {
        type:DataTypes.DATE,
        allowNull:false,
    },
    date_of_travel:{
        type:DataTypes.DATE,
        allowNull:false,
    },
    number_of_passengers:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },

     pick_up_time:{
        type:DataTypes.TIME,
        allowNull:false,
     },




    pick_up_location:{
        type:DataTypes.STRING(50),
        allowNull: false,
     


    },
    drop_off_location:{
        type:DataTypes.STRING(50),
        allowNull: false,
        


    },

    // cab_id:{
    //     type:DataTypes.INTEGER,
    //     allowNull:false
    // },
    // driver_id:{
    //     type:DataTypes.INTEGER,
    //     allowNull:false
    // },
    // id:{
    //     type:DataTypes.INTEGER,
    //     allowNull:false
    // },

    


   
    
    
});


module.exports = booking;





