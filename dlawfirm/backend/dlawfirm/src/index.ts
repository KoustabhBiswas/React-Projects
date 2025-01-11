import express, { Application } from 'express';
import { Dbconfig } from './config/Dbconfig';
import cors from 'cors';
import { app } from './config/config';
import dotenv from 'dotenv';
import { Commonmiddleware } from './middleware/common';

dotenv.config();
const port = process.env.PORT;
// Setting up cors starts
const whitelist = ['http://localhost:8000/','http://localhost:5173','http://192.168.0.147:3000/'];
const corsOptions = {
    origin: function (origin: string | undefined, callback: (error: Error | null, allow?: boolean) => void) {
        console.log(whitelist.indexOf(origin as string));
        console.log("Getting origin");
        console.log(origin);
        if (whitelist.indexOf(origin as string) !== -1 /*|| !origin*/) {
            console.log("test1");
            callback(null, true); // Allow access if origin is in the whitelist or no origin
        } else {
            console.log("test");
            callback(new Error('Not allowed by CORS')); // Block the request if origin is not allowed
        }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials:true
};
app.use(cors(corsOptions));
// Setting up cors ends

app.use(express.json());
Commonmiddleware();
Dbconfig();

app.listen(port, () => {
    console.log("Server Running");
})