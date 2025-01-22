const mongoose = require("mongoose");

async function connectDB(){
    return mongoose.connect("mongodb+srv://karansoni7973:B%40b%40Lsoni7973@cluster0.r7r6p0b.mongodb.net/MyShop?retryWrites=true&w=majority&appName=Cluster0").then(()=>{ console.log("Database Connected")});
}

module.exports = {
    connectDB
};