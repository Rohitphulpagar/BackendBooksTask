const express=require("express");
const dotenv=require("dotenv");
const mongoose=require("mongoose");
const bodyParser=require("body-parser");
const adds=require("./Route/AddBook");
const list=require("./Route/BookList");
const listById=require("./Route/bookListById");
const updates=require("./Route/updateDetails");
const deletes=require("./Route/deleteBook");

dotenv.config();
const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

mongoose.connect(process.env.MONGODB_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>console.log("DB connected"))
.catch((error)=>console.log("failed to connect mongoDB.",error));

app.get("/",(req,res)=>{
    res.status(200).json({
        service:"books-listing-server",
        status:"Active",
        time:new Date(),
    })
});

app.use((err, req, res, next) => {
    res.status(500).json({
        message: "Something went wrong.",
    });
});


app.use("/user",adds);
app.use("/user",list);
app.use("/user",listById);
app.use("/user",updates);
app.use("/user",deletes);

const PORT=process.env.PORT || 4000;

app.listen(PORT,()=>{
    console.log(`server is running on port: ${process.env.PORT}`)
})