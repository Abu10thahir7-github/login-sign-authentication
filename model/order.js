   
   const mongoose = require("mongoose");

   const orderSchema = new mongoose.Schema({
       name: String,
       price: Number,
   })

   const orderModel=mongoose.model("Order", orderSchema)
   module.exports=orderModel