const DataTypes= require('sequelize');
const sequelize= require('../config/config');
// const {Order} = require('../models/Order');

const Consignor= sequelize.define('Consignor',{
    consignorId:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        allowNull:false,
        autoIncrement:true

    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    phoneNumber:{
        type:DataTypes.STRING,
        allowNull:false
    }
    
});

// Consignor.hasMany(Order,{foreignKey:'consignorId'});

module.exports=Consignor;