const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');
const Order = require('././Order');  // Import the Order model

const Item = sequelize.define('Item', {
    itemId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    orderId: {
        type: DataTypes.INTEGER,
        allowNull: false
        // references: {
        //     model: Order,  // Use the imported Order model here
        //     key: 'orderId'
        // }
    },
    itemName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

// Define the association between Item and Order
// Item.belongsTo(Order, { foreignKey: 'orderId', onDelete: 'CASCADE' });

module.exports = Item;
