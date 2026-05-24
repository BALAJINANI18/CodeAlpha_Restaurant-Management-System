const mongoose = require("mongoose");

const reservationSchema = new mongoose.Schema({

    customerName: String,

    tableNumber: Number,

    reservationTime: String

});

module.exports = mongoose.model(
    "Reservation",
    reservationSchema
);