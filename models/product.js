const mongoose = require("mongoose");


const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    code:{
        type: String,
        unique: true,
    },
    category:{
        type: String,
    },
    price:{
        type: Number,
    },
    gstRate:{
        type: Number,
    },
    stock:{
        type:Number,
    },
})

const Product = mongoose.model("products", productSchema);

module.exports = Product;