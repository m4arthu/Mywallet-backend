 import Joi from "joi";

 export const signUpValidation = (user) =>{
    const userSchema = Joi.object({
        name: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().required().min(3)
    })
     return userSchema.validate(user, { abortEarly: false })
    
 }

 export const signInValidation = (user) => {
    const userSchema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().required().min(3)
    })
    return userSchema.validate(user, { abortEarly: false })
 }

 export const  newTransationValidate = (transation) =>{
    const transationSchema = Joi.object({
        value:Joi.number().required().positive(),
        descripton:Joi.string().required(),
        type:Joi.string().required(),
    })
    return transationSchema.validate(transation,{abortEarly:false})
 }