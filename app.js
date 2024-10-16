import dotenv from 'dotenv';
import express from 'express';
import connectDB from './src/db/db.js';
import cors from "cors";
import userRouter from './src/routes/user.routes.js';

dotenv.config({
    path:'.env'
})

const app = express();


app.use(express.json({ limit: "15kb" })); 
app.use(cors({origin:process.env.CORS}));
app.use(express.urlencoded({extended:true, limit:"15kb"}));
app.use( "/api/v1/user", userRouter )




connectDB().then(()=>{
    app.listen(process.env.PORT  || 3000,()=>{
        console.log(`Server listening on port ${process.env.PORT}` );
    })
}).catch((error)=>{
    console.log(`Server error: ${error}`);}
)