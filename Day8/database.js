
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
        // const find=await collections.find({}).toArray();
        // console.log(find);

        console.log(`✅ MongoDB Connected: ${client.options.srvHost || 'Localhost'}`);
        const insertOne=await collections.insertOne({name:"Alice",age:30,city:"New York"});
        console.log('Insert Result:', insertOne);

        const insertMany=await collections.insertMany([
            {name:"Bob",age:25,city:"Los Angeles"},
            {name:"Charlie",age:35,city:"Chicago"}
        ]);
        console.log('Insert Many Result:', insertMany); 

        const filter=await collections.find({age:{$gt:28}}).toArray();
        console.log('Find Result:', filter);
        
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