const express=require("express");
const user=require("../models/books");
const router=express.Router();

router.get("/list/:id",async(req,res)=>{
    try{
const bookId=req.params.id;
const bookDetails=await user.findById(bookId);
//const bookDetails=await user.find({_id:bookId});
res.json({
    status:"successful",
data:bookDetails,
})
    }catch(error){
        res.status(500).json({
            status:"failed",
            message:"Internal Server Error"
        })
    }
})
module.exports=router;