const exprees=require('express');
const app=exprees();

app.use( exprees.json());
//middlewre to convert data send by user through api end  point user into json


//Dummy Database

const FoodMenu = [
    { id: 1, id: "Pizza", price: 120, category: "veg" },
    { id: 2, food: "Burger", price: 80, category: "veg" },
    { id: 3, food: "Chicken Biryani", price: 250, category: "nonveg" },
    { id: 4, food: "Paneer Tikka", price: 150, category: "veg" },
    { id: 5, food: "Fish Curry", price: 300, category: "nonveg" },
    { id: 6, food: "Veg Sandwich", price: 60, category: "veg" },
    { id: 7, food: "Mutton Kebab", price: 350, category: "nonveg" },
    { id: 8, food: "Pasta", price: 110, category: "veg" },
    { id: 9, food: "Egg Roll", price: 90, category: "nonveg" },
    { id: 10, food: "Salad", price: 70, category: "veg" },
];


const AddToCart=[];
//user add to cart

const cart=[];
 
app.get('/food',(req,res)=>{
    res.status(200).send(FoodMenu)
})
app.post('/admin',(req,res)=>{
    //int this we check he request sendby some is admin or not or we use authentication the we give me authorization

    //Authenticate proper authentication is neede but i have not studied it till now so use some random dummy code
    const token="ABCDEF";
    const access=token==="ABCDEF"?1:0;
    if(access){
        FoodMenu.push(req.body);
        res.status(200).send("Item added succesfully");
    }
    else{
        res.status(401).send(403,"Invalid role")
    }
})

app.delete('/admin/:id',(req,res)=>{
    const token="ABCDEF";
    const access=token==="ABCDEF"?1:0;
    if(access){
        const id=parseInt(req.params.id);
        const Index= FoodMenu.findIndex(index=>index.id===id);
        if(index==-1){
            res.send("Item does not exist");
        }
        else{
        FoodMenu.splice(Index,1);
        res.status(200).send("Item Deleted Succesfully");
        } 
    }
})

app.patch('/admin',(req,res)=>{
     const token="ABCDEF";
    const access=token==="ABCDEF"?1:0;
    if(access){
    const id=parseInt(req.body.id);
    const foodData=FoodMenu.find(item=>item.id===id)
    if(foodData){
         if(req.body.food){
            foodData.food=req.body.food
         }
         if(req.body.price){
            foodData.price=req.body.price
         }
         if(req.body.category){
            foodData.category=req.body.category
         }
         res.send("Item Updated Successfully");
         
    }
    else{
     res.send("Item not found")
    }

    }
})

app.get('/user',(req,res)=>{
    res.send(cart);
})
app.post('/user/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const foodItem = FoodMenu.find(item => item.id === id);
    if (foodItem) {
        cart.push(foodItem);
        res.status(200).send("Item added to cart");
    } else {
        res.status(404).send("Food item not found");
    }
});
app.delete('/user/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const foodItem = cart.find(item => item.id === id);
    if (foodItem) {
        cart.splice(foodItem,1);
        res.status(200).send("Item added to cart");
    } else {
        res.status(404).send("Food item not found");
    }
});
app.listen(3000)