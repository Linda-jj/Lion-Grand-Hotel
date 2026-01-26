const reservationModels = require("../models/reservationModels");
const createReservation = async (req, res) => {
  try {
    const { name, email, phone, checkin, checkout, guests, roomName, roomId } =
      req.body;
    if (
      !name ||
      !email ||
      !phone ||
      !checkin ||
      !checkout ||
      guests === undefined||
      !roomName ||
      !roomId
    ) {
      return res.json({ success: false, message: "All findls are required" });
    }
    const reservation = new reservationModels({
      name,
      email,
      phone,
      checkin,
      checkout,
      guests,
      roomName,
      roomId,
      
    });
    await reservation.save();
    res.json({
      success: true,
      message: "Reservation created succesfully",
    });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "error creating reservation" });
  }
};
const getAllReservation = async (req, res) => {
  try {
    const reservations = await reservationModels.find().sort({ createdAt: -1 });
    res.json({ success: true, reservations });
  } catch (error) {
    res.json({ message: "error fecting reservation" });
  }
};
const deleteReservation = async (req, res) => {
  try {
    const { id } = req.params;
    const reservation = await reservationModels.findByIdAndDelete(id);
    if (!reservation) {
      return res
        .status(404)
        .json({ success: false, message: "Reservation not found" });
    }

    res.json({ success: true, message: "Reservation deleted successfully" });
  } catch (error) {
    res.json({ message: "error deleting reservation" });
  }
};
module.exports = { createReservation, getAllReservation, deleteReservation };
