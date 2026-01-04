const express=require("express");
const app=express();
const BookStore=[{id:1,title:"Harry Potter",author:"J.K.Rowling",price:500},{id:2,title:"The Hobbit",author:"J.R.R.Tolkien",price:400},{id:3,title:"1984",author:"George Orwell",price:300},{id:4,title:"To Kill a Mockingbird",author:"Harper Lee",price:350},{id:5,title:"The Great Gatsby",author:"F. Scott Fitzgerald",price:450}];
app.get("/books",(req,res)=>{
    console.log(req.query);
    let books = BookStore;
    if (req.query.price) {
        const price = parseInt(req.query.price);
        books = BookStore.filter(book => book.price === price);
    }
    res.send(books);
})

app.get("/books/:id",(req,res)=>{
    const bookId=parseInt(req.params.id);
    const book=BookStore.find(b=>b.id===bookId);
    res.send(book);
})
app.post("/books",(req,res)=>{
    const newBook={id:6,title:"The Catcher in the Rye",author:"J.D.Salinger",price:380};
    BookStore.push(newBook);
    res.send({message:"New book added",book:newBook});
});

app.patch("/books/:id",(req,res)=>{
    const bookId=parseInt(req.params.id);
    const book=BookStore.find(b=>b.id===bookId);
    if(book){
        book.price=450;
        res.send({message:"Book price updated",book:book});
    }else{
        res.status(404).send({message:"Book not found"});
    }}
);
app.delete("/books/:id",(req,res)=>{
    const bookId=parseInt(req.params.id);
    const bookIndex=BookStore.findIndex(b=>b.id===bookId);
    if(bookIndex!==-1){
        const deletedBook=BookStore.splice(bookIndex,1);
        res.send({message:"Book deleted",book:deletedBook});
    }
});
app.listen(3000,()=>{
    console.log("server is running on port 3000");
});



















// app.use(express.json());
// app.get("/user",(req,res)=>{
//     res.send({name:"John",age:30});
// });
// app.post("/create",(req,res)=>{
//     res.send({message:"Data created successfully"});
//     console.log(req.body);
// });
// app.patch("/modify",(req,res)=>{
//     res.send({message:"Data modified successfully"});
// });
// app.put("/update",(req,res)=>{
//     res.send({message:"Data updated successfully"});
// });
// app.delete("/delete",(req,res)=>{
//     res.send({message:"Data deleted successfully"});
// });
// app.listen(3000,()=>{
//     console.log("server is running on port 3000");
// });
