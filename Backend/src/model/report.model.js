import mongoose from "mongoose";
const reportSchema=new mongoose.Schema({
    senderID:{
       type:mongoose.Schema.ObjectId,
       ref:"User",
       required:true
    },
    title:{
        type:"String",
        required:true
    },
    description:{
        type:"String",
         required:true
    },
    attachImage:{
        type:"String"
    },
    issueLocation:{
        type:"String",
        required:true
    },department:{
        type:"String",
        required:true
    }

},{timestamps:true})
const Report=mongoose.model("Report",reportSchema)
export default Report;