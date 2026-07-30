const express = require("express");
const cors = require("cors"); // ✅ ADD THIS

const app = express();

app.use(cors()); // ✅ ADD THIS
app.use(express.json());

let orders = [];

// PLACE ORDER
app.post("/place-order", (req, res) => {
    const order = req.body;

    console.log("New Order Received:", order);

    orders.push(order);

    res.json({
        message: "Order received successfully ✅"
    });
});

// GET ORDERS
app.get("/orders", (req, res) => {
    res.json(orders);
});

app.listen(5000, () => {
    console.log("Server running on port 5000 🚀");
});