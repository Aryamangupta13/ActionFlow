import  express from 'express';
import dotenv from "dotenv"
import connectionDB from './database/connectionDB';

const app=express();

dotenv.config();

connectionDB();

app.listen(process.env.PORT,()=>{
    console.log(`server running on port ${process.env.PORT}`)
})