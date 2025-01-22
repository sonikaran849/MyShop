const mongoose = require("mongoose");

async function connectDB(){
    return mongoose.connect(process.env.mongoUrl).then(()=>{ console.log("Database Connected")});
}

module.exports = {
    connectDB
};