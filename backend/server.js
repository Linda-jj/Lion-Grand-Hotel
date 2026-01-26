require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 7000;
const hotelRouter = require("./routes/hotelRouter");
const reservationRouter = require("./routes/reservationRouter");

app.use(
  cors({
    origin: true, // allow all origins
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }),
);
app.use(express.json());

// Database connection
require("./config/db");

const cloudinary = require("./config/cloudinary");
const userRouter = require("./routes/userRouter");
console.log("Cloudinary loaded:", cloudinary.config().cloud_name);
app.use("/api/hotel", hotelRouter);
app.use("/api/reservation", reservationRouter);
app.use("/api/user", userRouter);
app.get("/", (req, res) => {
  res.send("API WORKING");
});
app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});
// app.use("/api/rooms", roomsRoutes);
// Middleware

app.listen(port, () => {
  console.log(` Server running on port ${port}`);
  console.log("MongoDB URI:", process.env.MONGODB_URI ? "Loaded" : "Missing");
  console.log("JWT Secret:", process.env.JWT_SECRET ? "Loaded" : "Missing");
  console.log(
    "Cloudinary:",
    process.env.CLOUDINARY_CLOUD_NAME ? "Loaded" : "Missing",
  );
});
