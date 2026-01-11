const express=require('express');
const app=express();
const connectDB=require('./database');
const User=require('./schema');

app.use(express.json());
connectDB();
try{
console.log("Database connected successfully");
app.listen(3000,()=>{
    console.log("Server is running on port 3000");  
});
}
catch(err){
    console.log("Database connection failed",err);
}

app.post('/register',async(req,res)=>{
    try{
        const user=await User.create(req.body);
        res.status(201).json({message:"User created successfully",user});
    }
    catch(err){
        res.send(err.message)
    }   
});
app.get('/info',async(req,res)=>{
    try{
        const users=await User.find();
        res.status(200).json({message:"Users fetched successfully",users});
    }
    catch(err){
        res.status(500).json({message:"Internal server error"});
    }   
});
app.get('/info/:id',async(req,res)=>{
    try{
        const user=await User.findById(req.params.id);
        res.status(200).json({message:"User fetched successfully",user});
    }   
    catch(err){
        res.status(500).json({message:"Internal server error"});
    }
});
app.delete('/info/:id',async(req,res)=>{
    try{
        const user=await User.findByIdAndDelete(req.params.id);     
        res.status(200).json({message:"User deleted successfully",user});
    }   
    catch(err){
        res.status(500).json({message:"Internal server error"});
    }
});

app.patch('/info/:id',async(req,res)=>{
    try{
        const user=await User.findByIdAndUpdate(req.params.id,req.body,{"runValidators":true});
        res.status(200).json({message:"User updated successfully",user});
    }
    catch(err){
        res.status(500).json({message:"Internal server error"});
    }
});