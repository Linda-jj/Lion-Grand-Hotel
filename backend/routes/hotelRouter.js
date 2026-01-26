const express = require("express");
const Hotel = require("../models/hotelModels");
const {
  addHotel,
  listHotel,
  removeHotel,
  singleHotel,
} = require("../controllers/hotelController");
const upload = require("../middleware/multer");

const hotelRouter = express.Router();
hotelRouter.post("/add", upload.single("image"), addHotel);
hotelRouter.get("/list", listHotel);
hotelRouter.delete("/delete/:id", removeHotel);
hotelRouter.get("/:id", singleHotel);

module.exports = hotelRouter;
