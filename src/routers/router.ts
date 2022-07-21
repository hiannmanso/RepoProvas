import {Router} from 'express'
import 'express-async-errors'


import authRouter from './auth.router.js'


const router = Router()
router.use(authRouter)
export default router