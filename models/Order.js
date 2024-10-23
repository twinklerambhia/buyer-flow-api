const DataTypes= require('sequelize');
const sequelize = require('../config/config');


const Order= sequelize.define('Order',{
    orderId:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        allowNull:false,
        autoIncrement:true
    },
    supplierName:{
        type:DataTypes.STRING,
        allowNull:false
    },
    source:{
        type:DataTypes.STRING,
        allowNull:false
    },
    destination:{
        type:DataTypes.STRING,
        allowNull:false
    },
    distance:{
        type:DataTypes.FLOAT,
        allowNull:false
    },
    loadType:{
        type:DataTypes.STRING,
        allowNull:false
    },
    billToAddress:{
        type:DataTypes.STRING,
        allowNull:false
    },
    invoiceNumber:{
        type:DataTypes.STRING,
        allowNull:false
    },
    orderDateTime:{
        type:DataTypes.DATE,
        allowNull:false
    },
    pickupDateTime:{
        type:DataTypes.DATE,
        allowNull:false
    },
    
    insuranceNumber:{
        type:DataTypes.STRING,
        allowNull:false
    },
    consignorId:{
        type:DataTypes.INTEGER,
        // references:{
        //     model:Consignor,
        //     key:'consignorId'
        // },
        allowNull:false
    },
    consigneeId:{
        type:DataTypes.INTEGER,
        // references:{
        //     model:Consignee,
        //     key:'consigneeId'
        // },
        allowNull:false
    }, remarkForConsignor:{
        type:DataTypes.STRING,
        allowNull:true
    },
    remark:{
        type:DataTypes.STRING,
        allowNull:true
    }

});


module.exports=Order;
