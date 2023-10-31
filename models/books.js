const mongoose=require("mongoose");

const bookSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    Author:{
        type:String,
        required:true,
    },
    Summary:{
        type:String,
        required:true,
    }
})

module.exports=mongoose.model("books",bookSchema);