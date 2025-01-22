const express = require("express");
const app = express();
const PORT = 8080;
const {connectDB} = require("./config/connection");
app.use(express.json());



connectDB();

const cartRouter = require("./routes/cart");
app.use("/api/cart", cartRouter);

const productRouter = require("./routes/product");
app.use("/api/products", productRouter);



app.listen(PORT, ()=>{
    console.log("Server is Connected");
});
