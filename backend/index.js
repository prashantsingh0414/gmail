import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import connectDb from "./db/connectDb.js";
import emailRoute from './routes/email.route.js';
import userRoute from './routes/user.route.js';


dotenv.config({});
connectDb();
const PORT =8080;
const app =express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());

const corsOption ={
    origin:'http://localhost:5173',
    credentials:true
}
app.use(cors(corsOption));
app.options('*', cors(corsOption));  

app.use("/api/v1/user",userRoute);
app.use("/api/v1/email",emailRoute);


app.listen(PORT,()=>{
    console.log(`server running at port ${PORT}`);
})