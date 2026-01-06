const mongoose = require('mongoose');
require('dotenv').config();
// Standard URI format
const uri = process.env.MONGO_URI; 

const connectDB = async () => {
    try {
        await mongoose.connect(uri);
      console.log(`✅ MongoDB Connected`);
// schema definition
        const userSchema = new mongoose.Schema({
            name: String,
            age: Number,
            city: String,
            gender:String
        });

// modal creation(collection creation)
const user=mongoose.model('User', userSchema);

// inserting documents or records or objects
// const newUser = new user({name:"David",age:28,city:"Miami",gender:"Male"});
// await newUser.save().then(() => console.log("User David added"));
// user.create({name:"Eve",age:22,city:"Boston",gender:"Female"});

// user.insertMany([
//     {name:"Frank",age:33,city:"Seattle",gender:"Male"},
//     {name:"Grace",age:27,city:"Denver",gender:"Female"}
// ]).then(() => console.log("Multiple users added"));

// user.create({name:"Ali",age:23,city:"Den",gender:"male",job:"no"}).then(()=>console.log("added"));

//finding the data
// const ans=await user.find({});
// console.log(ans);

//find document by name
const one=await user.find({name:"Eve"});
console.log(one);


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