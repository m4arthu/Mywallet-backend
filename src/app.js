import express, { json } from "express"
import cors from "cors"
import dotenv from "dotenv"
import {MongoClient} from "mongodb"
import { Routers} from "./routers.js"
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
app.use(Routers)

app.listen(process.env.PORT,()=>{console.log("servidor rodando na porta",process.env.PORT)})