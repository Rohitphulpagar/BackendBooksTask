const express=require("express");
const user=require("../models/books");
const router=express.Router();

router.delete("/delete/:id",async(req,res)=>{
    try{
const {id}=req.params;
await user.findByIdAndDelete(id);
res.json({
    status:"successful",
    message:"book deleted successufully"
})
    }catch(error){
        res.status(500).json({
            status:"failed",
            message:"Internal Server Error"
        })
    }
})

module.exports=router;