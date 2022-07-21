import Joi from 'joi'
import { user } from '../interfaces/auth.interface.js'



export const authSchema = Joi.object<user>({
    email:Joi.string().email().required(),
    password:Joi.string().pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{10,}$/).required(),
    confirmPassword:Joi.ref('password')
})