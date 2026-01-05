
const { MongoClient } = require('mongodb');
require('dotenv').config();
// Standard URI format
const uri = process.env.MONGO_URI; 

// The 'Client' is the tool we use to talk to the database
const client = new MongoClient(uri);

let dbConnection;

const connectDB = async () => {
    try {
        await client.connect();
        console.log("Connecting to the database...");
        
        // You MUST specify the database name here if it's not in your URI
        dbConnection = client.db('Learning'); 
        const collections=dbConnection.collection('User');
        const find=await collections.find({}).toArray();
        console.log(find);
        
        console.log(`✅ MongoDB Connected: ${client.options.srvHost || 'Localhost'}`);
    } catch (error) {
        console.error(`❌ Connection Error: ${error.message}`);
        process.exit(1);
    }
};

// We export a helper function to get the active database connection
const getDB = () => {
    if (!dbConnection) {
        throw new Error("Database not initialized. Call connectDB first.");
    }
    return dbConnection;
};

connectDB();