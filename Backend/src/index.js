import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './lib/db.js'
const app=express()
dotenv.config()
const port=process.env.PORT;
app.listen(()=>{
    console.log(`app is listing to port ${port}`)
    connectDB()
})