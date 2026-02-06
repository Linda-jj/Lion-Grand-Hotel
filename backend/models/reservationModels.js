const mongoose = require("mongoose");

const reservationSchema = new mongoose.Schema(
  {
    name: { type: String},
    email: { type: String },
    phone: { type: String },
    checkin: { type: Date, required: true },
    checkout: { type: Date, required: true },
    guests: { type: Number, required: true },
    roomName: { type: String},
    roomId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "hotels",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Reservation", reservationSchema);
