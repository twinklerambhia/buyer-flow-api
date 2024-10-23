const DataTypes=require('sequelize');
const sequelize=require('../config/config');

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


module.exports=LogisticManagerAssignment;