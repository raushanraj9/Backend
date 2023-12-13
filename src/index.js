import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import express from "express";

// require('dotenv').config({path:'./.env'});
import dotenv from "dotenv";
import connectDB from "./db/index.js";
const app=express();

dotenv.config({
    path: './.env'
})

connectDB();

/*;(async()=>{

     try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("errror",(error)=>{
            console.error("Error",error)
        })
        app.listen(process.env.PORT,()=>{
            console.log(`server is running fine on the port ${process.env.PORT}`)
        })

     }
     catch(error)
     {
        console.log("Error",error);
     }
})()*/

