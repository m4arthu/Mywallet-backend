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