const express= require('express');
const bodyParser= require('body-parser');
const orderRoutes= require('../routes/orderRoutes');
const sequelize = require('../config/config'); 
const Order= require('../models/Order');
const Consignor= require('../models/Consignor');
const Consignee= require('../models/Consignee');
const Item= require('../models/Item');
const LogisticManagerAssignment=require('../models/LogisticManagerAssignment');
const LogisticManager= require('../models/LogisticManager');
require('dotenv').config();

const app= express();
const PORT= process.env.PORT|| 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/api/orders',orderRoutes);
app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`);
});


