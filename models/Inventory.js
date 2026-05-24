const mongoose = require("mongoose");

const inventorySchema = new mongoose.Schema({

    itemName: String,

    quantity: Number

});

module.exports = mongoose.model(
    "Inventory",
    inventorySchema
);