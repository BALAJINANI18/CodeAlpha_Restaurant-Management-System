const express = require("express");
const router = express.Router();

const Order = require("../models/Order");
const Inventory = require("../models/Inventory");

router.post("/", async (req, res) => {

    const order = new Order(req.body);

    for (let item of order.items) {

        const inventoryItem =
            await Inventory.findOne({
                itemName: item.name
            });

        if (inventoryItem) {

            inventoryItem.quantity -= item.quantity;

            await inventoryItem.save();
        }
    }

    await order.save();

    res.json({
        message: "Order Placed",
        order
    });
});

router.get("/", async (req, res) => {

    const orders = await Order.find();

    res.json(orders);
});

router.put("/:id", async (req, res) => {

    const updatedOrder =
        await Order.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

    res.json(updatedOrder);
});

module.exports = router;