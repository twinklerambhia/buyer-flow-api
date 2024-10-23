const DataTypes=require('sequelize');
const sequelize= require('../config/config');
// const Order = require('../models/Order');

const Consignee=sequelize.define('Consignee',{
    consigneeId:{
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

// Consignee.hasMany(Order,{foreignKey:'consigneeId'});

module.exports=Consignee;