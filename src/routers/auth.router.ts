import { Router } from 'express'
import { signinGET, signupPOST } from '../controllers/auth.controller.js'
import { validateSchema } from '../middlewares/validateSchema.js'
import { authSchema } from '../schemas/auth.schema.js'
import { signInSchema } from '../schemas/sigin.schema.js'

const authRouter = Router()

authRouter.post('/signup', validateSchema(authSchema), signupPOST)
authRouter.post('/signin', validateSchema(signInSchema), signinGET)
export default authRouter
