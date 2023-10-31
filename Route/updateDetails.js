const express=require("express");
const user=require("../models/books");
const router=express.Router();

router.put("/update/:id",async(req,res)=>{
    try{
const{title,Author,Summary}=req.body;
const{id}=req.params;
await user.findByIdAndUpdate(id,{
    title,Author,Summary
});
res.json({
    status:"successful",
    message:"data update successfully."
});
    }catch(error){
        res.status(500).json({
            status:"failed",
            message:"Internal Server Error"
        })
    }
})

module.exports=router;