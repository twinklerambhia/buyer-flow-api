const DataTypes=require('sequelize');
const sequelize=require('../config/config');
// const {Order}= require('../models/Order');
// import Order from '../models/Order';
// const LogisticManager= require('../models/LogisticManager');

const LogisticManagerAssignment= sequelize.define('LogisticManagerAssignment',{
    orderId:{
        type:DataTypes.INTEGER,
        allowNull:false
        // ,references:{
        //     model: 'Order',
        //     key:'orderId'
        // }
        
    },
    logisticManagerId:{
        type:DataTypes.INTEGER,
        allowNull:false
        // ,references:{
        //     model:'LogisticManager',
        //     key:'logisticManagerId'
        // }
    }
});

// LogisticManagerAssignment.belongsTo(LogisticManager,{foreignKey:'logisticManagerId'});
// LogisticManagerAssignment.belongsTo(Order,{foreignKey:'orderId'});

module.exports=LogisticManagerAssignment;