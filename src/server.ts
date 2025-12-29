import app from "./app";
import 'dotenv/config'
import { connectMongo } from "./database/mongo";

const port = process.env.PORT || 8080;

async function bootstrap(){
  try{
    await connectMongo(); //Conecao com meu banco de dados mongo
  
    app.listen(port,()=>{console.log(`🚀 Server running on port ${port}`)});
  }catch(error){
    console.error('❌ Server failed to start');
  }
}

bootstrap();