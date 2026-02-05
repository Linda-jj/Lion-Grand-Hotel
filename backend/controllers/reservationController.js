const Reservation = require("../models/reservationModels");

exports.createReservation = async (req, res) => {
  try {
    const { name, email, phone, checkin, checkout, guests, roomName, roomId } =
      req.body;
    // ---------------- VALIDATION ----------------
    if (
      !name ||
      !email ||
      !phone ||
      !checkin ||
      !checkout ||
      guests === null ||
      !roomName ||
      !roomId
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }
    const checkInDate = new Date(checkin);

const checkOutDate = new Date(checkout);
    
    if (isNaN(checkInDate) || isNaN(checkOutDate)) {
      return res.status(400).json({
        success: false,
        message: "Invalid dates",
      });
    }
       const normalizedCheckIn = new Date(checkInDate);
    normalizedCheckIn.setHours(0, 0, 0, 0);
    
    const normalizedCheckOut = new Date(checkOutDate);
    normalizedCheckOut.setHours(0, 0, 0, 0);

    if (normalizedCheckOut <= normalizedCheckIn) {
      return res.status(400).json({
        success: false,
        message: "Check-out must be after check-in",
      });
    }
console.log("NEW BOOKING:");
console.log("checkInDate:", checkInDate.toISOString());
console.log("checkOutDate:", checkOutDate.toISOString());
const conflict = await Reservation.findOne({
      roomId,
    $and: [
        { 
          checkin: { 
            $lt: normalizedCheckOut // Existing checkin is before new checkout
          } 
        },
        { 
          checkout: { 
            $gt: normalizedCheckIn // Existing checkout is after new checkin
          } 
        }
      ]
    });

    if (conflict) {
      console.log("CONFLICT FOUND:",{
              existing: {
          checkin: conflict.checkin.toISOString(),
          checkout: conflict.checkout.toISOString()
        },
        requested: {
          checkin: normalizedCheckIn.toISOString(),
          checkout: normalizedCheckOut.toISOString()
        }
      });
      return res.status(409).json({
        success: false,
        // message: "This room is already booked for the selected dates. Please choose different dates or another room.",
      });}

    // ---------------- CREATE RESERVATION ----------------
    const reservation = new Reservation({
    name,
      email,
      phone,
      checkin: normalizedCheckIn,
      checkout: normalizedCheckOut,
      guests,
      roomName,
      roomId,
    });

    await reservation.save();

    res.status(201).json({
      success: true,
      message: "Reservation created successfully",
      reservation,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Error creating reservation",
    });
  }
};

// ---------------- GET ALL ----------------
exports.getAllReservation = async (req, res) => {
  try {
    const reservations = await Reservation.find().sort({ createdAt: -1 });
    res.json({ success: true, reservations });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching reservations",
    });
  }
};

// ---------------- DELETE ----------------
exports.deleteReservation = async (req, res) => {
  try {
    const { id } = req.params;
    const reservation = await Reservation.findByIdAndDelete(id);

    if (!reservation) {
      return res.status(404).json({
        success: false,
        message: "Reservation not found",
      });
    }

    res.json({
      success: true,
      message: "Reservation deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error deleting reservation",
    });
  }
};
