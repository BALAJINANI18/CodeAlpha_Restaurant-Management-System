const express = require("express");
const router = express.Router();

const Inventory = require("../models/Inventory");

// Add Inventory
router.post("/", async (req, res) => {

    const inventory =
        new Inventory(req.body);

    await inventory.save();

    res.json(inventory);
});

// Get Inventory
router.get("/", async (req, res) => {

    const inventory =
        await Inventory.find();

    res.json(inventory);
});

// Update Inventory
router.put("/:id", async (req, res) => {

    const updatedInventory =
        await Inventory.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

    res.json(updatedInventory);
});

module.exports = router;