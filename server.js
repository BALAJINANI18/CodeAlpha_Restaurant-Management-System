const express = require("express");

const connectDB = require("./config/db");

const menuRoutes =
    require("./routes/menuRoutes");

const orderRoutes =
    require("./routes/orderRoutes");

const tableRoutes =
    require("./routes/tableRoutes");

const inventoryRoutes =
    require("./routes/inventoryRoutes");

const app = express();

app.use(express.json());

// Database Connection
connectDB();

// Routes
app.use("/menu", menuRoutes);

app.use("/orders", orderRoutes);

app.use("/tables", tableRoutes);

app.use("/inventory", inventoryRoutes);

const PORT = 5000;

app.listen(PORT, () => {

    console.log(
        `Server Running on Port ${PORT}`
    );

});