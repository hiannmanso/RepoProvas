import { Router } from 'express'
import { signinGET, signupPOST } from '../controllers/auth.controller.js'
import { validateSchema } from '../middlewares/validateSchema.js'
import { authSchema } from '../schemas/auth.schema.js'

const authRouter = Router()

authRouter.post('/signup', validateSchema(authSchema), signupPOST)
authRouter.post('/signin', signinGET)
export default authRouter
