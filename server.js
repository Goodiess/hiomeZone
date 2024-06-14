import express from "express";
import bodyParser from 'body-parser'
import connectDB from './SRC/DB/database.js'
import cors from 'cors'
import dotenv from "dotenv";
import router from "./SRC/route/indexroute.js";

dotenv.config();

const app = express();
const PORT  = process.env.PORT || 3030


app.use(express.json());
app.use(cors({origin:"*"}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use('/homezone', router)

const startServer  = async () => {

   connectDB()
   try {
      app.listen(PORT,() => {console.log(`APP IS RUNNING ON PORT: ${PORT}`);})
   } catch (error) {
      console.log(error);
   }
};

startServer();

app.get("/", (req,res) => {
   res.send('API IS RUNNING')
})