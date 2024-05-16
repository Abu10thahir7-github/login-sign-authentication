  const express = require("express");
const Order = require("../controllers/orderController");
const OrderGet = require("../controllers/orderController");
   const router=express.Router()

   router.post('/order',Order)
  router.get('/orderget',OrderGet)
   module.exports=router