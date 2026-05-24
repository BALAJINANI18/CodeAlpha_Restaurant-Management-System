const express = require("express");
const router = express.Router();

const Table = require("../models/Table");
const Reservation = require("../models/Reservation");

// Add Table
router.post("/", async (req, res) => {

    const table = new Table(req.body);

    await table.save();

    res.json(table);
});

// Get Tables
router.get("/", async (req, res) => {

    const tables = await Table.find();

    res.json(tables);
});

// Reserve Table
router.post("/reserve", async (req, res) => {

    const { tableNumber } = req.body;

    const existingReservation =
        await Reservation.findOne({
            tableNumber
        });

    if (existingReservation) {

        return res.json({
            message: "Table Already Reserved"
        });
    }

    const reservation =
        new Reservation(req.body);

    await reservation.save();

    await Table.findOneAndUpdate(
        { tableNumber },
        { status: "Reserved" }
    );

    res.json({
        message: "Table Reserved",
        reservation
    });
});

module.exports = router;