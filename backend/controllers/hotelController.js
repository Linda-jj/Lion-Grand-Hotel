const hotelModels = require("../models/hotelModels");
const cloudinary = require("../config/cloudinary");

const addHotel = async (req, res) => {
  try {
    console.log("REQ BODY:", req.body);
    console.log("REQ FILE:", req.file);

    const { name, price, description } = req.body;

    if (!name || !price || !description) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    let imageUrl = "https://via.placeholder.com/150";

    if (req.file && req.file.path) {
      const result = await cloudinary.uploader.upload(req.file.path, {
        resource_type: "image",
      });
      imageUrl = result.secure_url;
    }
    const hotelData = {
      name,
      description,
      price: Number(price),
      image: imageUrl,
      date: Date.now(),
    };

    const hotel = new hotelModels(hotelData);
    await hotel.save();

    res.json({
      success: true,
      message: "Hotel room added sucessfully",
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "error adding hotel room ",
    });
  }
};

const listHotel = async (req, res) => {
  try {
    const hotels = await hotelModels.find({});
    res.json({ success: true, hotels });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "error listed hotel room ",
    });
  }
};

const removeHotel = async (req, res) => {
  try {
    console.log("DELETE HIT ", req.params.id);
    const hotel = await hotelModels.findByIdAndDelete(req.params.id);

    if (!hotel) {
      return res.json({
        success: false,
        message: "Hotel not found",
      });
    }

    res.json({
      success: true,
      message: "Hotel room removed successfully",
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "Error deleting hotel room",
    });
  }
};
const singleHotel = async (req, res) => {
  try {
    const hotel = await hotelModels.findById(req.params.id);
    if (!hotel) return res.json({ success: false, message: "Room not found" });
    res.json({ success: true, hotel });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "error fetching specific hotel room ",
    });
  }
};

module.exports = {
  addHotel,
  listHotel,
  removeHotel,
  singleHotel,
};
