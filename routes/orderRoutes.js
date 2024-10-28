const express= require('express');
const router= express.Router();
const {createOrder}= require('../controllers/orderController');
const{assignLogisticManager}= require('../controllers/logisticManagerAssignmentController');

router.post('/',createOrder);

router.post('/assign-logistic-manager',assignLogisticManager);

module.exports=router;