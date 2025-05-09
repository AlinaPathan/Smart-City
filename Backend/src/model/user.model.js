
import mongoose from "mongoose"
const userSchema =new mongoose.Schema({
    fullName:{
        type:"String",
        required:true
    },
    email:{
        type:"String",
        required:true,
        unique:true

    },
    password:{
        type:"String",
        required:true,
        minlength:8
    },
    phone:{
        type:"String",
        required:true
    },
    adharNo:{
        type:"String",
        required:true,
        unique:true
    },
    profilePic:{
        type:"String",
        default:""
    },
    address:{
        type:"String",
        required:true
    }
},{timestamps:true})
const User=mongoose.model("User",userSchema)
export default User;