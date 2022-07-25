import Joi from 'joi';
export const testsSchema = Joi.object({
    name: Joi.string().required(),
    pdfUrl: Joi.string()
        .pattern(/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/)
        .required(),
    category: Joi.string().required(),
    teacher: Joi.string().required(),
    discipline: Joi.string().required(),
});
