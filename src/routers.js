import express from "express"
import { signInValidation, signUpValidation } from "./middleweres.js"
import { findTransations, tokenValidation, userLogin, userRegister } from "./controlers.js"
import { db } from "./app.js"

const app = express()

app.post("/cadastro", async (req, res) => {
    const user = req.body
    const validation = signUpValidation(user)
    if (validation.error) {
        res.status(422).send(validation.error.message)

    } else {
        const registration = await userRegister(user)
        switch (registration) {
            case 409:
                res.status(registration).send("email ja em uso")
                break;
            case 201:
                res.sendStatus(201)
                break;
            default:
                break;
        }

    }
})

app.post("/", async(req,res)=>{
    const user = req.body
    const validation = signInValidation(user)
    if (validation.error) {
        res.status(422).send(validation.error.message)
        return
    } 
   const login = await userLogin(user)

    if( login === 404 ) {
        res.status(404).send("email não registrado")
    } else if(login === 401) {
        res.status(401).send("senha incorreta")
    } else {
        res.status(200).send(login)
    }
})

app.get("/home",async(req,res)=>{
 const token = req.headers.authorization
 if(token){
  const tokenvalidation =  tokenValidation(token)
  if(tokenvalidation) {
      const transations = await findTransations(token)
      console.log(transations)
      res.status(200).send(transations)
    } else {
        res.sendStatus(401)
    }
 } else {
    res.sendStatus(401)
 }
})
export const signUprouter = app
export const signInRouter = app
export const homerouter = app