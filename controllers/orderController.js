const orderModel = require("../model/order");


const Order = async (req, res) => {
       try{
               const {name,price}=req.body
               const order=await orderModel.create({name:name,price:price})
               console.log(order);
               res.send(order)
       }catch(err){
        console.log(err);

       }
}
//get

const OrderGet = async(req,res)=>{
    try{
    const  orderdata = orderModel.find({name:name,price:price})
    res.send(orderdata)
    }catch(err){
        console.log(err);
    }

}
module.exports= Order,OrderGet