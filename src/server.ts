import app from "./app";
import 'dotenv/config'
import { connectMongo } from "./database/mongo";

const port = process.env.PORT || 8080;

async function bootstrap(){
  try{
    await connectMongo(); //Espera a conexao com o banco de dados, la coloquei logs para falar se deu tudo certo ou errado
    app.listen(port,()=>{console.log(`🚀 Server running on port ${port}`)});
  }catch(error){
    console.error('❌ Server failed to start');
  }
}


bootstrap();