const express=require('express');
const app=express();

app.use(express.json());
// this is middleware

app.get('/',(req,res,next)=>{
    // res.send('Hello, World!');
    next();
},
(req,res)=>{
    console.log('Request handled successfully');
    res.send('Hello');
});
app.listen(3000,()=>console.log('Server is running on port 3000'));