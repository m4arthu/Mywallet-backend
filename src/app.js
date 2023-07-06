import express, { json } from "express"
import cors from "cors"
import dotenv from "dotenv"
import {MongoClient,ObjectId} from "mongodb"
import Joi from "joi"
import { signInRouter, signUprouter } from "./routers.js"
const app = express()
app.use(cors())
app.use(json())
dotenv.config()

const mongoClient = new MongoClient(process.env.DATABASE_URL)  
mongoClient.connect()
.then(()=>{
    console.log("data base connected")
}).catch((err)=>{
    console.log(err.message) 
})

export let db = mongoClient.db()

// routers
app.use(signUprouter)
app.use(signInRouter)


app.listen(process.env.PORT,()=>{console.log("servidor rodando na porta",process.env.PORT)})