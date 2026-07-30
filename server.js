const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let orders = [];


// PLACE ORDER
app.post("/place-order", (req, res) => {

    const order = {
        id: Date.now(),
        username: req.body.username,
        tableNo: req.body.tableNo,
        items: req.body.items,
        status: "Pending",
        time: new Date()
    };

    console.log("New Order:", order);

    orders.push(order);

    res.json({
        success: true,
        message: "Order placed successfully"
    });
});


// GET ALL ORDERS FOR KITCHEN
app.get("/orders", (req,res)=>{
    res.json(orders);
});


// UPDATE ORDER STATUS
app.put("/update-order/:id",(req,res)=>{

    const id = Number(req.params.id);

    const order = orders.find(o=>o.id===id);

    if(order){
        order.status=req.body.status;

        res.json({
            message:"Status updated"
        });
    }
    else{
        res.json({
            message:"Order not found"
        });
    }

});


app.listen(5000,()=>{
    console.log("Server running on port 5000 🚀");
});