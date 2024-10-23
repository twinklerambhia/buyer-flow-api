const DataTypes=require('sequelize');
const sequelize=require('../config/config');

const LogisticManager= sequelize.define('LogisticManager',
    {
        logisticManagerId:{
            type:DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true,
            autoIncrement:true
        },
        name:{
            type:DataTypes.STRING,
            allowNull:false
        },
        email:{
            type:DataTypes.STRING,
            allowNull:false
        },
        phoneNumber:{
            type:DataTypes.STRING,
            allowNull:false
        }
    }
);


module.exports=LogisticManager;