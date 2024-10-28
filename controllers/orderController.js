const Order= require('../models/Order');
const Consignor= require('../models/Consignor');
const Consignee= require('../models/Consignee');
const Item= require('../models/Item');


const createOrder= async (req,res)=>{
    try{
        const {supplierName, source, destination, distance, loadType, billToAddress, invoiceNumber,
            orderDateTime,pickupDateTime,insuranceNumber,consignorDetails, consigneeDetails, items, remarkForConsignor, remark}= req.body;
        
        const consignor = await Consignor.create(consignorDetails);
        const consignee= await Consignee.create(consigneeDetails);
        const orderDate= new Date(orderDateTime);
        const pickupDate= new Date(pickupDateTime);
        const order= await Order.create({
            supplierName,
            source,
            destination,
            distance,
            loadType,
            billToAddress,
            invoiceNumber,
            orderDateTime: orderDate,
            pickupDateTime: pickupDate, 
            insuranceNumber,
            consignorId: consignor.consignorId,
            consigneeId:consignee.consigneeId,
            remarkForConsignor,
            remark
        });

        if (items && items.length){
            await Item.bulkCreate(items.map(item=>({
                ...item,
                orderId:order.orderId
            })));
        }
        res.status(201).json({message:"order created successfully", order});


    }catch(error){
        console.log(error);
        res.status(500).json({message:"error creating order" , error});
    }
};
module.exports={createOrder};