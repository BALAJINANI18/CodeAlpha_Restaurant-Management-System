const express = require("express");
const router = express.Router();

const Menu = require("../models/Menu");

router.post("/", async (req, res) => {

    const menu = new Menu(req.body);

    await menu.save();

    res.json(menu);
});

router.get("/", async (req, res) => {

    const menu = await Menu.find();

    res.json(menu);
});

router.put("/:id", async (req, res) => {

    const updatedMenu =
        await Menu.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

    res.json(updatedMenu);
});

router.delete("/:id", async (req, res) => {

    await Menu.findByIdAndDelete(
        req.params.id
    );

    res.json({
        message: "Menu Deleted"
    });
});

module.exports = router;