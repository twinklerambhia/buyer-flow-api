const Order= require('../models/Order');
const LogisticManagerAssignment=require('../models/LogisticManagerAssignment');

const assignLogisticManager= async(req,res)=>{
    try{
        const {orderId,logisticManagerId}= req.body;
        const order= await Order.findByPk(orderId);
        if(!order){
            return res.status(404).json({message:"order not found"});
        }

        const assignment= await LogisticManagerAssignment.create({
            orderId,
            logisticManagerId
        });
        res.status(200).json({message:"logistic manager assigned successfully"});

    }catch(error){
        console.log(error);
        res.status(500).json({message:"erro assigning logistic manager"});
    }
};
module.exports={assignLogisticManager};