const mongoose = require("mongoose");

const mongoURL = "mongodb+srv://Lindaliy:GrV1yGlpcMIYrv2H@cluster0.pf1rxok.mongodb.net/lion";

mongoose.connect(mongoURL)


const connection = mongoose.connection;


connection.on("error", () => {
    console.log("MongoDB connection failed");
});

connection.on("connected", () => {
    console.log("MongoDB connected successfully");
});

module.exports = mongoose;
