import mongoose from 'mongoose';
export const connectDB=async()=>{
  try{
    const connect=await mongoose.connect(process.env.MONGODB_URL)
    console.log(`mongodb conncetion: ${connect.connection.host}`)
  }catch(err){
      console.log(`mongodb coonection error: ${err}`)
  }
}