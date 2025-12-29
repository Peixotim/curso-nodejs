import mongoose from "mongoose";

export async function connectMongo():Promise<void> {
  
  try{
    await mongoose.connect(process.env.MONGO_URL as string);
    console.log(`MongoDB connect ✅`)
  }catch(error){
    console.log(`❌ Error connecting to MongoDB`,error)
    process.exit(1);
  }
}