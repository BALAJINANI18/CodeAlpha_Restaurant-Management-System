const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema({
    name: String,
    price: Number,
    category: String,
    availability: Boolean
});

module.exports = mongoose.model("Menu", menuSchema);