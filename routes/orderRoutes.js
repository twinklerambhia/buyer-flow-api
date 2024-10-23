const express= require('express');
const router= express.Router();
const {createOrder, assignLogisticManager}= require('../controllers/orderController');

router.post('/',createOrder);

router.post('/assign-logistic-manager',assignLogisticManager);

module.exports=router;