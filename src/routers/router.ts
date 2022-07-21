import {Router} from 'express'
import 'express-async-errors'


import authRouter from './auth.router.js'
import testsRouter from './tests.router.js'


const router = Router()
router.use(authRouter)
router.use(testsRouter)
export default router