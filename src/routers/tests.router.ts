import { Router } from 'express'
import {
	findAllTestsByDisciplieGET,
	findAllTestsByTeacherGET,
	testPOST,
} from '../controllers/tests.controller.js'
import { validateSchema } from '../middlewares/validateSchema.js'
import { validateToken } from '../middlewares/validateToken.js'
import { testsSchema } from '../schemas/tests.schema.js'

const testsRouter = Router()
testsRouter.post('/tests', validateSchema(testsSchema), validateToken, testPOST)
testsRouter.get('/tests/disciplines', validateToken, findAllTestsByDisciplieGET)
testsRouter.get('/tests/teachers', validateToken, findAllTestsByTeacherGET)
export default testsRouter
