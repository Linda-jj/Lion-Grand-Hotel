const express = require("express");
const {createReservation,getAllReservation,deleteReservation} = require("../controllers/reservationController");
 const router= express.Router()
 const {deleteHotel}=require("../controllers/hotelController")



 router.post('/create', createReservation)
 router.get('/all',getAllReservation)
 router.delete('/delete/:id',deleteReservation)


 module.exports=router