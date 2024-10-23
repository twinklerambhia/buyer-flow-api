const Order= require('../models/Order');
const Consignor= require('../models/Consignor');
const Consignee= require('../models/Consignee');
const Item= require('../models/Item');
const LogisticManagerAssignment=require('../models/LogisticManagerAssignment');
const LogisticManager= require('../models/LogisticManager');


Consignee.hasMany(Order,{foreignKey:'consigneeId'});
Consignor.hasMany(Order,{foreignKey:'consignorId'});
Item.belongsTo(Order, { foreignKey: 'orderId'});
LogisticManager.hasMany(LogisticManagerAssignment,{foreignKey:'logisticManagerId'});
LogisticManagerAssignment.belongsTo(LogisticManager,{foreignKey:'logisticManagerId'});
LogisticManagerAssignment.belongsTo(Order,{foreignKey:'orderId'});
Order.belongsTo(Consignor,{foreignKey:'consignorId'});
Order.belongsTo(Consignee,{foreignKey:'consigneeId'});
Order.hasMany(Item, {foreignKey:'orderId'});
Order.hasOne(LogisticManagerAssignment,{foreignKey:'orderId'});