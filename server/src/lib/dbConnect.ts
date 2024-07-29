import mongoose from "mongoose"

export const dbConnect =async()=>{
    try {
    await mongoose.connect(process.env.MONGO_URI!,{
        dbName:"Web-Dev-Compiler",
    });
    console.log("connection established");
}catch(error){
    console.log("connection error");
    
}
    
}