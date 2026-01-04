const exprees=require("express");
const app=exprees();
app.use((req,res)=>{
    res.send({name:"John",age:30});
})
app.listen(3000,()=>{
    console.log("server is running on port 3000");
});