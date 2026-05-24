const mongoose = require("mongoose");

const tableSchema = new mongoose.Schema({

    tableNumber: Number,

    capacity: Number,

    status: {
        type: String,
        default: "Available"
    }

});

module.exports = mongoose.model("Table", tableSchema);