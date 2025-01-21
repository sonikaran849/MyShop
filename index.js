const express = require("express");
const app = express();
const PORT = 8080;
const {connectDB} = require("./config/connection");
app.use(express.json());
const url = "mongodb://127.0.0.1:27017/MyShop";


connectDB(url);

app.listen(PORT, ()=>{
    console.log("Server is Connected");
});
