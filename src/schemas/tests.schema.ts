import Joi from 'joi'
import { test } from '../interfaces/tests.interface'



export const testsSchema = Joi.object<test>({
    name:Joi.string().required(),
    pdfUrl:Joi.string().pattern(/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/).required(),
    category:Joi.string().required(),
    teacher:Joi.string().required(),
    discipline:Joi.string().required(),
})