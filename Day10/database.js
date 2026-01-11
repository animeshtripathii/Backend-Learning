const mongoose = require('mongoose');
require('dotenv').config();
// Standard URI format
const uri = process.env.MONGO_URI; 

const connectDB = async () => {
    try {
        await mongoose.connect(uri);
      console.log(`✅ MongoDB Connected`);
    } catch (error) {
        console.error(`❌ MongoDB Connection Error: ${error.message}`);
        process.exit(1);
    }
}
module.exports = connectDB;