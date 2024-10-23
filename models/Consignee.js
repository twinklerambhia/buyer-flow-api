const DataTypes=require('sequelize');
const sequelize= require('../config/config');

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


module.exports=Consignee;