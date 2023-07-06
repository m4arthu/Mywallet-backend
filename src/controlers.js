
import { db } from "./app.js";
import bcrypt from "bcrypt"
import {v4 as uuid} from "uuid"
import daysjs from "dayjs"
export async function userRegister(user) {
    const { name, email, password } = user
    try {
        const users = await db.collection("users").find({ email: user.email }).toArray()
        if (users.length === 0) {
            await db.collection("users").insertOne({
                name: name,
                email: email,
                password: await bcrypt.hash(password, 10)
            })
            return 201
        } else {
            return 409
        }
    } catch (err) {
        console.log(err)
        return 500
    }
}

export async function userLogin(user) {
    const { email, password } = user
    try {
        const user = await db.collection("users").findOne({ email: email })
        if (user === null) {
            return 404
        } else {
            const validation = await bcrypt.compare(password, user.password)
            if (validation) {
                const token = uuid();
                await db.collection("sessions").insertOne({ userId: user._id, token })
               return token
            } else {
                return 401
            }
        }
    } catch (err) {
        return 500
        console.log(err)
    }
}

export async function findTransations(token){
    let user = await db.collection("sessions").findOne({token})
    try {
      const transations = await db.collection("transations").find({user:user.userId}).toArray()
      return transations
      console.log(transations)
    } catch(error){
        console.log(error)
        return error
    }
}

export async function tokenValidation(token){
   const sessions =  await db.collection("sessions").find({token}).toArray()
   if (sessions.length > 0){
    return true
   } else {
    return false
   }
}

export async function saveTransations(token,options) {
   try {
       let user =await db.collection("sessions").findOne({token})
       const newTransation =  {
           user:user.userId,
           type:options.type,
           title:options.descripton,
           value:options.value,
           data: daysjs(Date.now()).format("MM-DD")
        }
        await db.collection("transations").insertOne(newTransation)
        return 200
    }catch(err){
        console.log(err) 
    } 
}

export async function getUser(token){
    let user = await db.collection("sessions").findOne({token})
    const username = await db.collection("users").findOne({_id:user.userId})
    return username.name
}