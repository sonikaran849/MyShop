const mongoose = require("mongoose");


const invoiceSchema = new mongoose.Schema({
    products: [
        {
          name: String,
          quantity: Number,
          price: Number,
          gst: Number,
          total: Number,
        },
    ],
    totalGST: Number,
    grandTotal: Number,
    date: { type: Date, default: Date.now },
})

const Invoice = mongoose.model("invoice", invoiceSchema);

module.exports = Invoice;