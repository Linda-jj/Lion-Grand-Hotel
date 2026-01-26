const mongoose = require("mongoose");

const reservationSchema = new mongoose.Schema({
  name: { type: String, require: true },
  email: { type: String, require: true },
  phone: { type: String, require: true },
  checkin: { type: Date, require: true },
  checkout: { type: Date, require: true },
  guests: { type: Number, require: true },
  roomName: { type: String, require: true },
  roomId: { type: mongoose.Schema.Types.ObjectId, ref: "Hotel" },
});
const Reservation = mongoose.model("Reservation", reservationSchema);
module.exports = Reservation;
