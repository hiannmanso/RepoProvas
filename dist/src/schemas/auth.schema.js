import Joi from 'joi';
export const authSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{10,}$/).required(),
    confirmPassword: Joi.ref('password')
});
