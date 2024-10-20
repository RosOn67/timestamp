import express from 'express';
import cors from 'cors';
import dotenv from "dotenv";
import routes from './routes.js';

dotenv.config();

const port = process.env.PORT||3000;

const app = express();

app.use(cors(
    {
        optionsSuccessStatus: 200, // some legacy browsers choke on 204 
    } 
));

app.use("/api", routes);
const server  = ()=>{
    try{
        app.listen(port, ()=>{
            console.log("Server started");
        })
        console.log("server created");
    }catch(error){
        console.log("Server failed to start reason:", error)
    }
}

server();